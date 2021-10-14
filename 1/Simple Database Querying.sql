SELECT user.ID, user.UserName, parent.UserName
FROM User AS user
LEFT JOIN User AS parent
ON parent.ID = user.Parent;