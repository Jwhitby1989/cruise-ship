function Controller(ship) {
  this.initialiseSea();
  this.ship = ship;
  document.querySelector("#sailbutton").addEventListener("click",() => {
    this.setSail();
  })
}
Controller.prototype = {
  renderPorts(portsArr) {
    const portElement = document.querySelector("#ports");
    portElement.style.width = "0px";
    portsArr.forEach((port, index) => {
      const newPortElement = document.createElement("div");
      newPortElement.className = "port";
      newPortElement.dataset.portIndex = index;
      portElement.appendChild(newPortElement);
      const elementWidth = parseInt(portElement.style.width,10);
      portElement.style.width = `${elementWidth + 150}px`;
    });
  },
  initialiseSea() {
    let changeImg = 0;
    const newImage = ["water0.png", "water1.png"];
    setInterval(() => {
      const seaBackground = document.querySelector("#viewport");
      seaBackground.style.backgroundImage = `url(../images/images/${
        newImage[changeImg % newImage.length]
      })`;
      changeImg += 1;
    }, 1000);
  },
  renderShip() {
    const shipStartIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
    const portImg = document.querySelector(`[data-port-index='${shipStartIndex}']`);
    const shipElement = document.querySelector('#ship');
    shipElement.style.top = `${portImg.offsetTop + 30}px`;
    shipElement.style.left = `${portImg.offsetLeft - 45}px`;
  },
  setSail() {
    const currentPortIndex = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
    const nextPort = currentPortIndex+1;
    const portImg = document.querySelector(`[data-port-index='${nextPort}']`);
    const shipElement = document.querySelector('#ship');
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10);
      if (shipLeft === (portImg.offsetLeft - 45)) {
        this.ship.setSail();
        this.ship.dock();
        clearInterval(sailInterval);
      }
      shipElement.style.left = `${shipLeft + 1}px`;
    }, 30);
    if (!portImg) {
      return alert('End of the line!')
    }
  },
  renderMessage(message) {

  }
};
