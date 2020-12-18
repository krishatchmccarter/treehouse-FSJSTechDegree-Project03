//Put the first field in the focus state
const name = document.getElementById("name");
window.onload = function() {
name.focus();
};

//Job role section. Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
const jobRoleOtherInput = document.getElementById("other-title");
const titleOption = document.getElementById("title");
//set input field to hidden. Use fundtion to show when other option is selected.
jobRoleOtherInput.style.display = 'none';
titleOption.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        jobRoleOtherInput.style.display = 'block';
    }
    else {
        jobRoleOtherInput.style.display = 'none';
        }
    }

)