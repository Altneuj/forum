document.getElementsByTagName('button')[0].addEventListener('click', function() {
  var messageContent = document.getElementById('message').value;
  var userName = document.getElementById('name').value;
  var byUser = " posted by " + userName;
  var newPost = document.createElement('p');
  newPost.className = 'new-post';
  var newContent = document.createTextNode(messageContent + byUser);
  newPost.appendChild(newContent);
  document.getElementsByClassName('posts')[0].append(newPost);
  document.getElementById('message').value = "";
  document.getElementById('name').value = "";
  var upvote = document.createElement('button');
  upvote.className = "upvote btn btn-success";
  var upvoteContent = document.createTextNode("upvote");
  upvote.appendChild(upvoteContent);
  newPost.append(upvote);
  var downvote = document.createElement('button');
  downvote.className = "downvote btn btn-warning";
  var downvoteContent = document.createTextNode("downvote");
  downvote.appendChild(downvoteContent);
  newPost.append(downvote);
  var editButton = document.createElement('button');
  editButton.className = 'edit btn btn-info'
  var editContent = document.createTextNode('edit');
  editButton.appendChild(editContent);
  newPost.append(editButton);
  var deleteButton = document.createElement('button');
  deleteButton.className = 'delete btn btn-danger';
  var deleteContent = document.createTextNode('delete');
  deleteButton.appendChild(deleteContent);
  newPost.append(deleteButton);

  document.getElementsByClassName('delete')[0].addEventListener('click', function() {
    document.getElementsByClassName('new-post')[0].remove();
  });

  document.getElementsByClassName('edit')[0].addEventListener('click', function() {
    var edit = window.prompt("Type your edit here");
    document.getElementsByClassName('new-post')[0].innerHTML = edit + byUser;
    var upvote = document.createElement('button');
    upvote.className = "upvote btn btn-success";
    var upvoteContent = document.createTextNode("upvote");
    upvote.appendChild(upvoteContent);
    newPost.append(upvote);
    var downvote = document.createElement('button');
    downvote.className = "downvote btn btn-warning";
    var downvoteContent = document.createTextNode("downvote");
    downvote.appendChild(downvoteContent);
    newPost.append(downvote);
    var editButton = document.createElement('button');
    editButton.className = 'edit btn btn-info'
    var editContent = document.createTextNode('edit');
    editButton.appendChild(editContent);
    newPost.append(editButton);
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete btn btn-danger';
    var deleteContent = document.createTextNode('delete');
    deleteButton.appendChild(deleteContent);
    newPost.append(deleteButton);
  });

});
