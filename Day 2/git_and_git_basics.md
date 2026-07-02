# Git & GitHub Notes — Commands, Concepts & Interview Questions

A quick-reference guide covering Git vs GitHub, core commands, branching/merging, and commonly asked interview questions.

---

## Table of Contents

1. [Git vs GitHub](#git-vs-github)
2. [Core Commands](#core-commands)
3. [Branching & Merging](#branching--merging)
4. [git checkout -b (detailed)](#git-checkout--b-new-detailed-usage)
5. [Answers to Given Questions](#answers-to-given-questions)
6. [Interview Questions](#interview-questions)

---

## Git vs GitHub

| | **Git** | **GitHub** |
|---|---|---|
| **What it is** | A distributed version control system (software) | A cloud-based hosting platform for Git repositories |
| **Installation** | Installed locally on your machine | Accessed via web browser / no local install needed |
| **Function** | Tracks changes to files, manages versions/history | Hosts remote repositories, enables collaboration |
| **Works offline?** | Yes, fully functional offline | No, requires internet connection |
| **Owned by** | Open source, created by Linus Torvalds | Owned by Microsoft |
| **Extra features** | Core VCS features only (commit, branch, merge) | Pull requests, issues, actions (CI/CD), project boards, wikis |
| **Alternatives** | Mercurial, SVN | GitLab, Bitbucket |

**In short:** Git is the *tool* that tracks versions of your code. GitHub is a *website/service* that hosts Git repositories online so teams can collaborate, review, and share code.

---

## Core Commands

### `git pull`
Fetches changes from a remote repository **and** merges them into your current local branch in one step.
```bash
git pull origin main
```
Equivalent to running `git fetch` followed by `git merge`.

### `git push`
Uploads your local commits to a remote repository.
```bash
git push origin main
```
First-time push of a new branch (sets upstream tracking):
```bash
git push -u origin feature-branch
```

### Create a Branch
```bash
# Create a new branch (stay on current branch)
git branch new-feature

# Create and switch to it immediately
git checkout -b new-feature

# Modern equivalent
git switch -c new-feature
```

### Merge a Branch
```bash
# 1. Switch to the branch you want to merge INTO (e.g., main)
git checkout main

# 2. Merge the feature branch into main
git merge new-feature

# 3. Push the merged result
git push origin main
```
If there are conflicting changes, Git will pause and mark conflict areas in the affected files for manual resolution, after which you run:
```bash
git add .
git commit
```

---

## Branching & Merging

| Step | Command | Purpose |
|---|---|---|
| 1 | `git branch` | List all local branches |
| 2 | `git branch new-feature` | Create a new branch named `new-feature` |
| 3 | `git checkout new-feature` | Switch to that branch |
| 4 | `git checkout -b new-feature` | Create + switch in one command |
| 5 | `git merge new-feature` | Merge `new-feature` into the currently checked-out branch |
| 6 | `git branch -d new-feature` | Delete the branch after merging (local) |
| 7 | `git push origin --delete new-feature` | Delete the branch on the remote |

---

## `git checkout -b new` (Detailed Usage)

The `git checkout -b <branch-name>` command **creates a new branch** and **switches to it** immediately — combining two operations (`git branch` + `git checkout`) into one.

### Syntax
```bash
git checkout -b <new-branch-name>
```

### Example
```bash
git checkout -b new
```
This creates a branch called `new` starting from your current branch's latest commit, and moves your working directory onto it.

### Common Variations

**Create a branch from a specific starting point (not the current branch):**
```bash
git checkout -b new main
# Creates 'new' branch based off 'main', regardless of what branch you're currently on
```

**Create a branch that tracks a remote branch:**
```bash
git checkout -b new origin/new
# Creates local branch 'new' and sets it to track the remote 'origin/new'
```

**Create a branch from a specific commit:**
```bash
git checkout -b new 4a5c8e1
# Creates 'new' branch starting from commit 4a5c8e1
```

### What happens internally
1. Git creates a new branch pointer named `new` pointing at the current commit (`HEAD`).
2. Git updates `HEAD` to point to the new branch.
3. Your working directory files remain unchanged (since the new branch starts at the same commit).

### Modern equivalent
Since Git 2.23+, the same result can be achieved with:
```bash
git switch -c new
```
(`switch` was introduced to separate branch-switching from the more overloaded `checkout` command, which also handles file restoration.)

### After creating the branch
```bash
# Make changes, then stage and commit
git add .
git commit -m "Add new feature"

# Push the new branch to remote and set upstream
git push -u origin new
```

---

## Answers to Given Questions

### ১. What is Git? What are the advantages of using Git?

**Git** is a free, open-source **distributed version control system** used to track changes in source code during software development. It allows multiple developers to work on the same project simultaneously without overwriting each other's work.

**Advantages of using Git:**
- **Distributed architecture** — every developer has a full copy of the repository (including history), so no single point of failure.
- **Branching & merging** — lightweight, fast branching lets developers work on features in isolation.
- **Speed** — most operations (commit, diff, log) are performed locally, making them very fast.
- **Data integrity** — uses SHA-1/SHA-256 hashing to ensure content isn't corrupted or lost.
- **Collaboration** — makes it easy for multiple developers to work together and merge changes.
- **Open source & widely adopted** — free to use, huge community support, integrates with platforms like GitHub, GitLab, Bitbucket.
- **Offline work** — you can commit, branch, and view history without an internet connection.

### ২. What do you understand by the term "Version Control System"?

A **Version Control System (VCS)** is a tool/software that tracks and manages changes to files (typically source code) over time. It allows you to:
- See who made changes, what changed, and when.
- Revert files back to a previous state if something breaks.
- Work on different versions/features in parallel (branching).
- Collaborate with multiple people on the same codebase without conflicts.

There are two main types:
- **Centralized VCS (CVCS)** — a single central server holds the repository (e.g., SVN).
- **Distributed VCS (DVCS)** — every user has a complete local copy of the repository (e.g., Git, Mercurial).

### ৩. What's the difference between Git and GitHub?

Git is the **version control tool** installed locally that tracks changes to your code. GitHub is a **cloud platform** that hosts Git repositories online, adding collaboration features like pull requests, issues, and code review. Git can be used entirely without GitHub (e.g., with GitLab, Bitbucket, or just locally), while GitHub is simply a hosting service built around Git. See the [full comparison table](#git-vs-github) above.

### ৪. Name a few Git commands with their functions.

| Command | Function |
|---|---|
| `git init` | Initializes a new Git repository in the current folder |
| `git clone <url>` | Copies (clones) a remote repository to your local machine |
| `git status` | Shows the state of the working directory and staging area |
| `git add <file>` | Stages changes to be included in the next commit |
| `git commit -m "message"` | Saves staged changes as a new commit with a message |
| `git push` | Uploads local commits to a remote repository |
| `git pull` | Fetches and merges changes from a remote repository |
| `git fetch` | Downloads changes from remote without merging them |
| `git branch` | Lists, creates, or deletes branches |
| `git checkout <branch>` | Switches to a different branch |
| `git merge <branch>` | Merges the specified branch into the current branch |
| `git log` | Shows commit history |
| `git diff` | Shows differences between commits, branches, or working directory |
| `git stash` | Temporarily saves uncommitted changes without committing |
| `git reset` | Undoes commits or unstages changes |
| `git revert` | Creates a new commit that undoes a previous commit |

### ৫. What is the difference between `git fetch` and `git pull`?

| | `git fetch` | `git pull` |
|---|---|---|
| **What it does** | Downloads new commits/branches from the remote **without** merging them | Downloads new commits **and** automatically merges them into your current branch |
| **Effect on working directory** | No change — your current branch and files stay the same | Your current branch is updated with the fetched changes |
| **Safety** | Safer — lets you review changes before merging (`git log origin/main`, `git diff`) | Less safe — can cause unexpected merge conflicts since it merges immediately |
| **Equivalent to** | Just downloading | `git fetch` + `git merge` |

```bash
# Fetch only — review before merging
git fetch origin
git log origin/main
git merge origin/main

# Pull — fetch + merge in one step
git pull origin main
```

**Rule of thumb:** Use `git fetch` when you want to inspect incoming changes first; use `git pull` when you're confident and just want to sync immediately.

---

## Interview Questions

1. **What is a "repository" in Git?**
   A repository (repo) is a storage location containing all the files, folders, and complete history of changes (commits) for a project.

2. **What is the difference between `git merge` and `git rebase`?**
   `git merge` combines two branch histories by creating a new merge commit, preserving the full history including divergent paths. `git rebase` rewrites commit history by moving/replaying your branch's commits on top of another branch, producing a linear, cleaner history — but it alters commit hashes.

3. **What is a merge conflict, and how do you resolve one?**
   A merge conflict occurs when Git can't automatically reconcile changes made to the same lines of a file in two different branches. To resolve it, open the affected file(s), manually edit the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) to decide the final content, then run `git add <file>` and `git commit` to complete the merge.

4. **What is the difference between `git reset` and `git revert`?**
   `git reset` moves the branch pointer backward, effectively removing commits from history (can be `--soft`, `--mixed`, or `--hard`). `git revert` creates a *new* commit that undoes the changes of a previous commit, without altering existing history — making it safer for shared/public branches.

5. **What is the `.gitignore` file used for?**
   It tells Git which files or folders to intentionally exclude from version control (e.g., `node_modules/`, `.env`, build artifacts, log files).

6. **What is `git stash` used for?**
   It temporarily shelves (stashes) uncommitted changes so you can switch branches or pull updates without committing incomplete work, then reapply them later with `git stash pop`.

7. **What's the difference between a local repository and a remote repository?**
   A local repository lives on your own machine, while a remote repository (e.g., on GitHub) is hosted on a server and shared among collaborators. Commands like `push`/`pull`/`fetch` sync data between the two.

8. **What is HEAD in Git?**
   `HEAD` is a pointer that refers to the current commit/branch you're working on — essentially "where you currently are" in the repository's history.

9. **What is the difference between `git clone` and `git fork`?**
   `git clone` is a Git command that copies a repository to your local machine. "Fork" is a GitHub (not Git) feature that creates your own **remote copy** of someone else's repository under your account, which you can then clone locally and later propose changes back via a pull request.

10. **What is a Pull Request (PR)?**
    A Pull Request is a GitHub/GitLab feature (not a Git command) that lets a developer propose changes from one branch (or fork) to be reviewed and merged into another branch, typically with discussion, code review, and CI checks attached.

11. **How do you undo the last commit but keep the changes in your working directory?**
    ```bash
    git reset --soft HEAD~1
    ```
    This removes the last commit but keeps all changes staged.

12. **What is the difference between `git branch -d` and `git branch -D`?**
    `-d` (lowercase) deletes a branch only if it has already been fully merged (safe delete). `-D` (uppercase) force-deletes the branch even if it has unmerged changes.

13. **What does `git rebase -i` (interactive rebase) let you do?**
    It lets you interactively edit commit history — reorder, squash (combine), edit, or drop commits before they're applied onto another branch.

14. **What is a "detached HEAD" state?**
    It occurs when you check out a specific commit (rather than a branch), so `HEAD` points directly to that commit instead of a branch reference. Any new commits made in this state aren't attached to a branch and can be lost unless you create a new branch from that point.

15. **How do you rename a branch?**
    ```bash
    # Rename current branch
    git branch -m new-branch-name

    # Rename a different branch
    git branch -m old-name new-name
    ```
