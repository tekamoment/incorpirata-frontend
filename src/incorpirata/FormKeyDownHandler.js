export default e => {
  if (e.key === "Enter") {
    // e.preventDefault();
    const inputs = Array.prototype.slice.call(
      document.querySelectorAll("input")
    );
    const index = (inputs.indexOf(document.activeElement) + 1) % inputs.length;
    const input = inputs[index];
    input.focus();
    input.select();
  }
};
