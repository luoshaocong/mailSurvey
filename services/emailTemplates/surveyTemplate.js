const keys = require('../../config/keys');
module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3> you !</h3>
          <p> answer my question</p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomin}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomin}/api/surveys/${survey.id}/no">No</a>
          </div>

        </div>

      </body>

    </html>



  `;

};
