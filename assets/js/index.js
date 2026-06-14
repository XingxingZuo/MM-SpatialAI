function log(message) {
  console.log(message);
}

function populate_people_html(html_id, details, row_split_idx){
    // content
    let content_html = ``
    for(var i=0; i<details.length; i++) {
      let detail = details[i]
      content_html += `
      <div class="column is-variable is-max-desktop">
        <div class="center">
          <img class="display-image center" src="${detail[1]}">
          <div> 
            <a href="${detail[4]}" target="_blank">${detail[0]}</a> <br>
            ${detail[2]} <br>
            ${detail[3]}
          </div>
        </div>
      </div>`
    }
    $(`#${html_id}`).html(content_html)
    // console.log($(`#${html_id}`).html())
    // $(`#${html_id}`).html($(`#${html_id}`).html() + content_html)
}


function populate_gallery(html_id, photos){
  let content_html = ``
  for(var i=0; i<photos.length; i++) {
    let photo = photos[i]
    content_html += `
    <div class="column is-one-third">
      <figure class="image gallery-figure">
        <a href="${photo[0]}" target="_blank" rel="noopener noreferrer">
          <img class="gallery-image" src="${photo[0]}" alt="${photo[1]}" loading="lazy">
        </a>
        <figcaption class="gallery-caption has-text-centered">${photo[1]}</figcaption>
      </figure>
    </div>`
  }
  $(`#${html_id}`).html(content_html)
}


function render_paper_link(title, url){
  if (url) {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a>`
  }
  return title
}

function find_contributed_paper_url(title){
  const sessions = Object.values(contributed_paper_sessions || {})
  for (let session of sessions) {
    const paper = session.find(entry => entry[1] == title && entry[2])
    if (paper) {
      return paper[2]
    }
  }
  return ``
}

function render_talk_detail(label, text){
  if (text) {
    return `<p><span class="bold">${label}.</span> ${text}</p>`
  }
  return ``
}

function populate_paper_title_list(html_id, papers){
  let content_html = papers.map(paper => {
    if (Array.isArray(paper)) {
      return `<li>${render_paper_link(paper[0], paper[1])}</li>`
    }
    return `<li>${render_paper_link(paper, find_contributed_paper_url(paper))}</li>`
  }).join(``)
  $(`#${html_id}`).html(`<ol>${content_html}</ol>`)
}


function populate_timed_paper_link_list(html_id, papers){
  let content_html = papers.map(paper => `
    <li><span class="bold">${paper[0]}</span>: ${render_paper_link(paper[1], paper[2])}</li>
  `).join(``)
  $(`#${html_id}`).html(`<ol>${content_html}</ol>`)
}

function populate_grouped_timed_company_list(html_id, entries){
  let content_html = ``
  let current_group = ``

  entries.forEach(entry => {
    if (entry[0] != current_group) {
      if (current_group != ``) {
        content_html += `</ol>`
      }
      current_group = entry[0]
      content_html += `<h3 class="title is-5 has-text-link mt-5">${current_group}</h3><ol>`
    }
    content_html += `<li><span class="bold">${entry[1]}</span>: ${entry[2]}</li>`
  })

  if (current_group != ``) {
    content_html += `</ol>`
  }
  $(`#${html_id}`).html(content_html)
}


function animate_hidden_content(hidden_content){
  if (hidden_content.is(':visible')) {
    hidden_content.fadeOut();  // If visible, fade out
  } else {
    hidden_content.fadeIn();   // If hidden, fade in
  }
}

$(document).ready(function () {
  $('#meta-desc').attr('content', `Web home for ${project_name} @ ${conference_details[0]}`);
  $('#title').html(project_name);
  $('#project-name').html(`${proj_small_caps}${project_name} @${conference_details[0].split(' ').join('')}`)
  $('#conference-details').html(`
  <a href="${conference_details[1]}" target="_blank">
  <img src="${conference_details[3]}" width="300px" height="300px">
  <p class="is-2"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>
  ${conference_details[2]}</p>
  </a>`)
  $('#workshop-date').html(workshop_date)
  $('#workshop-room').html(workshop_room)

  // talk content
  talk_content = Object.values(talk_speaker_details)
  populate_people_html('talk-content1', talk_content.slice(0, 4))
  populate_people_html('talk-content2', talk_content.slice(4, 7))

  // organizers content
  populate_people_html('organizer-content-1', organizers_details.slice(0, 3))
  populate_people_html('organizer-content-2', organizers_details.slice(3, ))

    // programcommittee content
  populate_people_html('programcommittee-content-1', pc_details.slice(0, 5))
  populate_people_html('programcommittee-content-2', pc_details.slice(5, 10))
  populate_people_html('programcommittee-content-3', pc_details.slice(10, 13))
  // populate_people_html('organizer-content-2', programcommittee_details.slice(3, ))


  // contributed paper sessions
  populate_timed_paper_link_list('spot-ppt-1-list', contributed_paper_sessions['spot-ppt-1'])
  populate_timed_paper_link_list('spot-ppt-2-list', contributed_paper_sessions['spot-ppt-2'])

  // sponsor introductions
  populate_grouped_timed_company_list('sponsor-introductions-list', sponsor_introductions)

  // gallery
  populate_gallery('gallery-content', gallery_photos)

  // coffee and poster sessions
  populate_paper_title_list('coffee-poster-morning-list', coffee_poster_sessions['coffee-poster-morning'])
  populate_paper_title_list('coffee-poster-afternoon-list', coffee_poster_sessions['coffee-poster-afternoon'])


  // const schedule = [
  //   'intro',
  //   'inv-talk',
  //   'break', 
  //   'spot-ppt',
  //   'spot-poster',
  //   'lunch-break',
  //   'disc',
  // ]

  // populate schedule
  let schedule_html = ``

  let keynote_counter = 0;
  
  schedule.forEach(schedule_entry => {
    let icon_html = ``
    let effect = ``
    let speaker_details = ``
    let title_abstract_html = ``
    let hidden_row_html = ``
    let title = ``
    let abstract = ``
    let bio = ``
    let details = ``
    let talk_mode = ``
    let align_left = ``

    if (schedule_entry[0] == 'inv-talk'){
      keynote_counter++;
      speaker_details = talk_speaker_details[schedule_entry[3]]
      talk_mode = schedule_entry[4] == 'online' ? `<span class='has-text-danger bold'>[Online]</span>` : ``
      title = speaker_details[5] ? `<h5 class="center has-text-success bold">${speaker_details[5]}</h5>` : ``
      abstract = render_talk_detail('Abstract', speaker_details[6])
      bio = render_talk_detail('Bio', speaker_details[7])
      details = title || abstract || bio ? `${title}${abstract}${bio}` : `<p class="center">Details coming soon. Thanks for your patience.</p>`
      align_left = title || abstract || bio ? "align-left" : ""
      title_abstract_html = ` ${talk_mode} ${keynote_counter}: ${speaker_details[0]} (<span class='toggle-btn has-text-success'>Details</span>)`
      hidden_row_html = `<tr class="hidden-content ${align_left}"><td colspan="3">${details}</td></tr>`
    }
    if (schedule_entry[0] == 'spot-ppt'){
      title_abstract_html = ` (<a class="has-text-success" href="#${schedule_entry[3]}">Details</a>)`
    }
    if (schedule_entry[0] == 'sponsors'){
      title_abstract_html = ` (<a class="has-text-success" href="#${schedule_entry[3]}">Details</a>)`
    }
    if(['lunch-break', 'coffee-break', 'award'].includes(schedule_entry[0])){
      if (schedule_entry[0] == 'lunch-break'){
        icon_html = `<i class="fas fa-utensils icon" style="position: relative;top: 5px; margin-left:5px"></i>`
      }
      if (schedule_entry[0] == 'coffee-break'){
        icon_html = `<i class="fas fa-coffee icon" style="position: relative;top: 5px; margin-left:5px"></i>`
        if (schedule_entry[3]){
          title_abstract_html = `(<a class="has-text-success" href="#${schedule_entry[3]}">Details</a>)`
        }
      }
      if (schedule_entry[0] == 'award'){
        icon_html = `<i class="fas fa-trophy icon" style="position: relative;top: 5px; margin-left:5px"></i>`
      }
    effect = `notification is-warning is-light`
    }

    // recording chapter link: opening + invited talks that appear in the video
    let recording_key = schedule_entry[0] == 'inv-talk' ? schedule_entry[3]
                      : schedule_entry[0] == 'intro' ? 'intro' : ``
    let recording_html = ``
    if (recording_key && recording_timestamps.hasOwnProperty(recording_key)) {
      recording_html = `<a class="has-text-danger bold" href="${workshop_recording}&t=${recording_timestamps[recording_key]}s" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube icon" style="position: relative; top: 4px;"></i>&nbsp;Watch</a>`
    }

    schedule_html += `
      <tr class="${effect}">
        <td>${schedule_entry[1]}</td><td>${schedule_entry[2]}${icon_html} ${title_abstract_html}</td><td class="has-text-centered">${recording_html}</td>
      </tr>
      ${hidden_row_html}`
  });
  $('#schedule-table-body').html(schedule_html)


  $('body').append(`
    <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <!--a target="_blank" href="" class="large-font bottom_buttons black-font">
          <svg class="svg-inline--fa fa-file-pdf fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas"
            data-icon="file-pdf" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
            <path fill="currentColor"
              d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z">
            </path>
          </svg>
        </a-->
        <br>
        <p>Last updated on: <span id="last-updated"></span> | Page template borrowed from <a target="_blank" href="https://neurl-rmw.github.io/"><span
              class="small-caps black-font">NeuRL-RMW</span></a>.</p>
      </div>
    </div>
  </footer>`)

  $('.toggle-btn').on('click', function() {
    var hidden_tr_content = $(this).closest('tr').next('.hidden-content');
    var hidden_span_content = $(this).closest('span').next('.hidden-content');

    animate_hidden_content(hidden_tr_content)
    animate_hidden_content(hidden_span_content)
  });

  // Last updated
  var apiUrl = "https://api.github.com/repos/XingxingZuo/MM-SpatialAI/commits?sha=main&per_page=1";
  $.getJSON(apiUrl, function (data) {
    var commitDate = new Date(data[0].commit.committer.date);
    var formattedDate = commitDate.toDateString();
    $('#last-updated').html(formattedDate);
  });
});
