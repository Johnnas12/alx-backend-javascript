/**
 * Contains the miscellaneous route handlers.
 * @author Yohanes Mesfin <https://github.com/johnnas12>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
