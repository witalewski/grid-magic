import { Promise } from 'rsvp';

export class ImageProcessor  {
  createCanvas = (width, height) => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  }

  getPlaceholderCanvas = (width, height, tileSize) => {
    const canvas = this.createCanvas(width, height);
    const context = canvas.getContext('2d');
      context.fillStyle = '#3c3836';
      context.fillRect(0, 0, width, height);
      context.fillStyle = 'white';
      context.fillRect(tileSize + 1, 0, 1, tileSize);
      context.fillRect(tileSize * 2 + 2, 0, 1, tileSize);
      return canvas;
  }

  getCanvasFromImageData = async (imageData, width, height, tileSize) =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = ({ target }) => {
        const canvas = this.createCanvas(width, height);
        const context = canvas.getContext('2d');
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);
        let targetWidth;
        let targetHeight;
        let xOffset;
        let yOffset;
        const imgProportions = target.width / target.height;
        const canvasProportions = width / height;
        if (imgProportions > canvasProportions) {
          targetWidth = width;
          targetHeight = width / imgProportions;
          xOffset = 0;
          yOffset = (height - targetHeight) / 2;
        } else {
          targetWidth = height * imgProportions;
          targetHeight = height;
          xOffset = (width - targetWidth) / 2;
          yOffset = 0;
        }
        context.drawImage(target, xOffset, yOffset, targetWidth, targetHeight);
        context.fillRect(tileSize, 0, 1, tileSize);
        context.fillRect(tileSize * 2 + 1, 0, 1, tileSize);

        resolve(canvas);
      };
      img.src = imageData;document.body.appendChild(img);
    })

    saveBase64AsFile = (base64, fileName) => {
      const link = document.createElement('a');
      link.setAttribute('href', base64);
      link.setAttribute('download', fileName);
      link.click();
    }

    downloadImages = (sourceCanvas, tileSize) => {
      const exportCanvas = this.createCanvas(tileSize, tileSize);
      const exportContext = exportCanvas.getContext('2d');
      [0, tileSize + 1, 2 * tileSize + 2].forEach((x, i) => {
        exportContext.drawImage(
          sourceCanvas,
          x,
          0,
          tileSize,
          tileSize,
          0,
          0,
          tileSize,
          tileSize
        );
  
        const data = exportCanvas.toDataURL('image/png');
        console.log(data);
        this.saveBase64AsFile(data, `export-${i}.png`);
      });
    };
}