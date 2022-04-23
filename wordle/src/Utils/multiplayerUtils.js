const multiplayerUtils = {
  // check if the id is valid: length <= 10 and letters only
  isValidId(id) {
    let hasChar = false;
    if (id.length <= 10) {
      for (let i = 0; i < id.length; i++) {
        // char has to be letter or space
        if (/^[A-Za-z0-9]+$/.test(id[i])) {
          hasChar = true;
        } else if (id[i] != " ") {
          alert(
            "The ID cannot contian character other than numbers and letters"
          );
          return false;
        }
      }
    } else {
      alert("The ID length cannot exceed 10 characters");
      return false;
    }
    if (!hasChar) {
      alert("The ID cannot be empty");
      return false;
    }
    return true;
  },
};

export default multiplayerUtils;
