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
            "User ID cannot contian character other than numbers and letters"
          );
          return false;
        }
      }
    } else {
      alert("User ID length cannot exceed 10 characters");
      return false;
    }
    if (!hasChar) {
      alert("User ID cannot be empty");
      return false;
    }
    return true;
  },

  isValidRoom(id) {
    let hasChar = false;
    if (id.length <= 6) {
      for (let i = 0; i < id.length; i++) {
        // char has to be letter or space
        if (/^[A-Za-z0-9]+$/.test(id[i])) {
          hasChar = true;
        } else if (id[i] != " ") {
          alert(
            "Room ID cannot contian character other than numbers and letters"
          );
          return false;
        }
      }
    } else {
      alert("Room ID length cannot exceed 6 characters");
      return false;
    }
    if (!hasChar) {
      alert("Room ID cannot be empty");
      return false;
    }
    return true;
  },

  makeId(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
};

export default multiplayerUtils;
