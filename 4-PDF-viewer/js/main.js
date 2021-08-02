const url = "./docs/pdf.pdf";

let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

const scale = 1.5,
  canvas = document.querySelector("#pdf-render"),
  ctx = canvas.getContext("2d");

// render the page
const renderPage = (num) => {
  pageIsRendering = true;

  // get page
  pdfDoc.getPage(num).then((page) => {
    //set scale
    const viewport = page.getViewport({ scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport,
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending != null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });
    // output current page
    document.querySelector("#page-num").textContent = num;
  });
};

// get document
pdfjsLib.getDocumet(url).promise.then((pdfDoc_) => {
  pdfDoc = pdfDoc_;

  document.querySelector("#page-count").textContent = pdfDoc.numPages;
  renderPage(pageNum);
});
