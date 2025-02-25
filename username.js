let user_name = prompt('enter your user name: ');
user_name_length = user_name.length

actual_user_name = '@'.concat(user_name + user_name_length)
//actual_user_name = '@' + user_name + user_name_length

console.log(actual_user_name)
