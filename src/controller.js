function Controller() {
  this.initialiseSea();
}
Controller.prototype = {
  renderPorts(portsArr) {
    const portElement = document.querySelector("#ports");
    /* portElement.style.width = "0px"; */
    portsArr.forEach((port, index) => {
      const newPortElement = document.createElement("div");
      newPortElement.className = "port";
      newPortElement.dataset.portIndex = index;
      portElement.appendChild(newPortElement);
      const elementWidth = Number(portElement.style.width);
      portElement.style.width = `${elementWidth + 256}px`;
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
};
