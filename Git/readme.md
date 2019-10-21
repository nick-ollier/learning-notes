# Git Commands

## git init

_initialise a new repository_

    git init [repository name]

## git clone

_clone an existing repository_

    git clone [repository URL]

## git config

_read username and email_

    git config -global user.name
    git config -global user.email

_set username and email_

    git config -global user.name "[user]"
    git config -global user.email "[email]"

## git add

_add file to staging area_

    git add [file name]

_add all files to staging area_

    git add .

## git commit

_git commit_

    git commit -m [commit message]

## git diff

_differences between files that aren't currently staged_

    git diff

_differences between two branches_

    git diff [first branch] [second branch]

_file names only - use --name-only flag_

    git diff [first branch] [second branch] --name-only

## git status

_list of modified files_

    git status

## git rm

_remove file from working directory - and stages deletion_

    git rm [file]

## git branch

_lists all local branches_

    git branch

_create a new branch_

    git branch [branch name]

_delete local branch_

    git branch -d [branch name]

## git checkout

_checkout branch_

    git checkout [branch name]

_create new branch and switch to it_

    git checkout -b [branch name]

## git merge

_merges branch into current branch_

    git merge [branch name]

## git push

_push changes up to repository_

    git push

## git pull

_pull latest changes from repository_

    git pull
