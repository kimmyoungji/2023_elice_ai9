function createCard({ title, duration, tools, description, myTask }) {
  return `<div id="project-Info">
        <div id="card-title">Matzzang VR game</div>
        <div class="info-item" id="title">
          <div class="subject">title</div>
          <div class="content">${title}</div>
        </div>
        <div class="info-item" id="duration">
          <div class="subject">duration</div>
          <div class="content">${duration}</div>
        </div>
        <div class="info-item" id="skills">
          <div class="subject">skills</div>
          <div class="content">${tools}</div>
        </div>
        <div class="info-item" id="description">
          <div class="subject">description</div>
          <div class="content">
            ${description}
          </div>
        </div>
        <div class="info-item" id="my-task">
          <div class="subject">my-task</div>
          <div class="content">
            ${myTask}
          </div>
        </div>
      </div>`;
}

export default createCard;
