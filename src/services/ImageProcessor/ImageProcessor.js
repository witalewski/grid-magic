import { Promise } from 'rsvp';
import { createCanvas } from 'canvas';

export class ImageProcessor {

  getPlaceholderCanvas = (width, height, tileSize, gapSize) => {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    context.fillStyle = '#E6E7E6';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'white';
    context.fillRect(tileSize + gapSize, 0, gapSize, tileSize);
    context.fillRect(tileSize * 2 + gapSize * 2, 0, gapSize, tileSize);
    return canvas;
  };

  getCanvasFromFile = async (file, width, height, tileSize, gapSize) =>
    new Promise(resolve => {
      const fileReader = new FileReader();

      fileReader.onload = event => {
        const imageData = event.target.result;
        const img = new Image();

        img.onload = ({ target }) => {
          const img = target;
          const canvas = createCanvas(width, height);
          const context = canvas.getContext('2d');
          context.fillStyle = 'white';
          context.fillRect(0, 0, width, height);
          let targetWidth;
          let targetHeight;
          let xOffset;
          let yOffset;
          const imgProportions = img.width / img.height;
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
          context.drawImage(img, xOffset, yOffset, targetWidth, targetHeight);
          context.fillRect(tileSize, 0, gapSize, tileSize);
          context.fillRect(tileSize * 2 + gapSize, 0, gapSize, tileSize);

          resolve(canvas);
        };

        img.src = imageData;
      };
      fileReader.readAsDataURL(file);
    });

  addTextToCanvas = (
    (canvas, text) => {
      const { width, height } = canvas;
      const newCanvas = createCanvas(width, height);
      const context = newCanvas.getContext('2d');
      context.drawImage(canvas, 0, 0, width, height);
      context.fillStyle = 'white';
      context.font = '600px Helvetica, Arial, sans';
      context.textAlign = 'center';
      context.fillText(text, width / 2, height / 2 + 220);
      return newCanvas;
    }
  );

  saveBlobAsFile = (blob, fileName) => {
    let a = document.createElement('a');
    a.setAttribute('download', fileName);
    a.setAttribute('href', window.URL.createObjectURL(blob));
    a.click();
  };

  downloadImages = (sourceCanvas, tileSize, gapSize) => {
    const imageBlobs = [];
    let imagesLeftToProcess = 3;
    [0, tileSize + gapSize, tileSize * 2 + gapSize * 2].forEach((x, i) => {
      const exportCanvas = createCanvas(tileSize, tileSize);
      const exportContext = exportCanvas.getContext('2d');
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
      exportCanvas.toBlob(blob => {
        imageBlobs[2 - i] = blob; // reverse so that downloaded files sorted by time are in proper order
        if (!--imagesLeftToProcess) {
          imageBlobs.forEach((blob, i) => {
            this.saveBlobAsFile(blob, `grid-image-${3 - i}.png`); //first download last image, then second, then first
          });
        }
      });
    });
  };
}
