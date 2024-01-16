This is a repo of my codewars. 

BELOW IS - HOW I CREATED THIS REPO:

command line:
PS C:\Users\kveta\Documents\CODing\projects> ls
PS C:\Users\kveta\Documents\CODing\projects> mkdir codewars
 Directory: C:\Users\kveta\Documents\CODing\projects


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        15/01/2024     16:45                codewars

PS C:\Users\kveta\Documents\CODing\projects> cd .\codewars\

PS C:\Users\kveta\Documents\CODing\projects\codewars> git init
Initialized empty Git repository in C:/Users/kveta/Documents/CODing/projects/codewars/.git/
PS C:\Users\kveta\Documents\CODing\projects\codewars> git add .
PS C:\Users\kveta\Documents\CODing\projects\codewars> git status   
On branch master

No commits yet

Changes to be committed:
        new file:   .gitignore
        new file:   README.md

PS C:\Users\kveta\Documents\CODing\projects\codewars> git commit -m"initilise repositories"
[master (root-commit) d3985d6] initilise repositories
 2 files changed, 3 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
PS C:\Users\kveta\Documents\CODing\projects\codewars> git branch -M main
PS C:\Users\kveta\Documents\CODing\projects\codewars> git remote add origin https://github.com/selfcoder-gazell/codewars.git
PS C:\Users\kveta\Documents\CODing\projects\codewars> git config 
usage: git config [<options>]  .... LOTS OF OPTIONS DISPLAYED IN MY TERMINAL AFTER THE LAST COMMAND ..... 

PS C:\Users\kveta\Documents\CODing\projects\codewars> git config --list
.... LOTS OF OPTIONS DISPLAYED IN MY TERMINAL AFTER THE LAST COMMAND ..... 


PS C:\Users\kveta\Documents\CODing\projects\codewars> git push -u oPS C:\Users\kveta\Documents\CODing\projects\codewars> git push rigin main
rigin main
rigin main
rigin main
Enumerating objects: 4, done.
 | 112.00 KiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/selfcoder-gazell/codewars.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
PS C:\Users\kveta\Documents\CODing\projects\codewars> node .\numbertostring.js
18
PS C:\Users\kveta\Documents\CODing\projects\codewars> node .\numbertostring.js
18
string
PS C:\Users\kveta\Documents\CODing\projects\codewars> git add .
PS C:\Users\kveta\Documents\CODing\projects\codewars> git status   
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   .gitignore
        new file:   numbertostring.js

PS C:\Users\kveta\Documents\CODing\projects\codewars> git commit -m"number to string solution"
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
        numbertostring.js

nothing added to commit but untracked files present (use "git add" to track)
PS C:\Users\kveta\Documents\CODing\projects\codewars> git add .
PS C:\Users\kveta\Documents\CODing\projects\codewars> git commit -m"number to string solution"
[main 9d57094] number to string solution
 1 file changed, 11 insertions(+)
 create mode 100644 numbertostring.js
PS C:\Users\kveta\Documents\CODing\projects\codewars> git push
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 511 bytes | 511.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/selfcoder-gazell/codewars.git
   d3985d6..9d57094  main -> main
PS C:\Users\kveta\Documents\CODing\projects\codewars>


