var i = 0;

document.getElementsByTagName('button')[0].addEventListener('click', function() {
//setting values from form
  var messageContent = document.getElementById('message').value;
  var userName = document.getElementById('name').value;

  //formulating post
  var byUser = " posted by " + userName;
  var newPost = document.createElement('p');
  newPost.id = ("post" + i);
  newPost.className = 'new-post';
  var newContent = document.createTextNode(messageContent + byUser);
  newPost.appendChild(newContent);
  document.getElementsByClassName('posts')[0].append(newPost);


  //reset form values
  document.getElementById('message').value = "";
  document.getElementById('name').value = "";


  //creating upvote button
  var upvote = document.createElement('button');
  upvote.className = "upvote btn btn-success";
  upvote.id = ("upvote" + i);
  var upvoteContent = document.createTextNode("upvote");
  upvote.appendChild(upvoteContent);
  newPost.append(upvote);


  //create downvote button
  var downvote = document.createElement('button');
  downvote.id = ("downvote" + i)
  downvote.className = "downvote btn btn-warning";
  var downvoteContent = document.createTextNode("downvote");
  downvote.appendChild(downvoteContent);
  newPost.append(downvote);


  //create edit button
  var editButton = document.createElement('button');
  editButton.id = ("edit" + i);
  editButton.className = 'edit btn btn-info'
  var editContent = document.createTextNode('edit');
  editButton.appendChild(editContent);
  newPost.append(editButton);


  //create delete button
  var deleteButton = document.createElement('a');
  deleteButton.id = ('delete' + i);
  deleteButton.className = 'delete fas fa-trash';
  newPost.append(deleteButton);

  var post = document.getElementById('post' + +i)

  var trash = document.getElementById('delete' + +i);
  trash.addEventListener('click', function() {
      post.remove();
    })


i++;



//delete button function
  document.getElementById('delete' + +i).addEventListener('click', function() {
    document.getElementById('post' + +i).remove();
  });


//edit button function
  document.getElementsByClassName('edit')[i].addEventListener('click', function() {
    var edit = window.prompt("Type your edit here");
    document.getElementsByClassName('new-post')[i].innerHTML = edit + byUser;


//recreating the buttons. I should create function for this. This is dumb.
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
    var deleteButton = document.createElement('a');
    deleteButton.className = 'delete fas fa-trash';
    newPost.append(deleteButton);
  });

});
