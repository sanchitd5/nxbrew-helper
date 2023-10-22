import format from "date-fns/format";

class TextHelper {
  /**
   * @author Sanchit Dang
   * @param {String} str String to Translate
   * @returns {String} Sentencecased String
   */
  sentenceCase(str: string): string {
    str = String(str);
    str = str.toLowerCase();
    return str.replace(/[a-z]/i, (letter) => letter.toUpperCase()).trim();
  }

  /**
   * @author Sanchit Dang
   * @param {String} time
   * @returns {String} Titlecased String
   */
  titleCase(str: string): string {
    str = String(str);
    const strArr = str.toLowerCase().split(" ");
    let final = [];
    for (let word of strArr) {
      final.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return final.join(" ");
  }

  /**
   * @author Sanchit Dang
   * @param {String} time
   * @returns {Date} Formatted Date
   */
  formatTime(time: string): Date | string {
    let newTime = new Date(time);
    return typeof newTime === "object"
      ? newTime.toLocaleDateString("en-US")
      : newTime;
  }

  /**
   * @author Sanchit Dang
   * @param {String} email Email Id
   * @returns {Boolean} isEmailValid
   */
  validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /**
   *
   * @param {Date} date Date to be formatted
   * @returns {String} Formatted date
   */
  formatToD_MMMM_YYYY(date: Date): string {
    return format(new Date(date), "D MMMM YYYY");
  }
}

const instance = new TextHelper();
export default instance;
