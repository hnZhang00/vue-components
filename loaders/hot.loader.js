module.exports = function(content) {
  content += `
    if (module.hot) {
      module.hot.accept();
    }
  `;
  return content
}