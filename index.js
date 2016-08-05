module.exports = (el, patch) => {
  let oldVDOM = el;
  return newVDOM => {
    oldVDOM = patch(oldVDOM, newVDOM);
  };
};
