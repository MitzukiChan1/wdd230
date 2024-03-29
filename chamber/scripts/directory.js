document.addEventListener('DOMContentLoaded', function () {
    const membersContainer = document.getElementById('members-container');
    const viewToggle = document.getElementById('view-toggle');
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');

    let isGridView = true;

    gridViewButton.addEventListener('click', function () {
        if (!isGridView) {
            isGridView = true;
            renderMembers();
        }
    });

    listViewButton.addEventListener('click', function () {
        if (isGridView) {
            isGridView = false;
            renderMembers();
        }
    });

    function renderMembers() {
        membersContainer.innerHTML = ''; // Clear previous content
        fetch('data/members.json')
            .then(response => response.json())
            .then(data => {
                data.members.forEach(member => {
                    const memberElement = document.createElement('div');
                    memberElement.classList.add('member');

                    if (isGridView) {
                        memberElement.classList.add('grid-view');
                        memberElement.innerHTML = `
                            <img src="images/${member.image}" alt="${member.name}">
                            <h2>${member.name}</h2>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <a href="${member.website}" target="_blank">${member.website}</a>
                            <p>Membership Level: ${member.membership_level}</p>
                            <p>${member.other_info}</p>
                        `;
                    } else {
                        memberElement.classList.add('list-view');
                        memberElement.innerHTML = `
                            <h2>${member.name}</h2>
                            <p>${member.address}</p>
                            <p>${member.phone}</p>
                            <a href="${member.website}" target="_blank">${member.website}</a>
                            <p>Membership Level: ${member.membership_level}</p>
                            <p>${member.other_info}</p>
                        `;
                    }

                    membersContainer.appendChild(memberElement);
                });
            })
            .catch(error => console.error('Error fetching members:', error));
    }

    renderMembers();
});
