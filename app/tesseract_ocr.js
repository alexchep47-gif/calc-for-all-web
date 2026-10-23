/* OCR Web pour Calc For All, basé sur Tesseract.js. */
(function () {
  window.calcForAllOcr = async function (bytes) {
    if (!window.Tesseract) {
      throw new Error('Tesseract.js non chargé');
    }
    const worker = await Tesseract.createWorker('eng', 1, {
      logger: function () {}
    });
    try {
      const result = await worker.recognize(bytes);
      return result && result.data ? result.data.text || '' : '';
    } finally {
      await worker.terminate();
    }
  };
})();
