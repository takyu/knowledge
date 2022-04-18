# Knowledge

## Clone by specifying the directory

1. Create directory

	Create an empty directory for clone.

	```sh
	mkdir dir_name && cd dir_name
	```

2. Initialize git

	Initialize git to make the empty directory you created your local repository.

	```sh
	git init && cat .git/config
	```

	and then, display your terminal as follows.

	```text
	[core]
		repositoryformatversion = 0
		filemode = false
		bare = false
		logallrefupdates = true
		symlinks = false
		ignorecase = true
	```

3. Enabled option of sparse-checkout

	By enabling sparse-checkout, you can clone only subdirectories.

	```sh
	git config core.sparsecheckout true && cat .git/config
	```

	and then, display your terminal as follows.

	```text
	[core]
		repositoryformatversion = 0
		filemode = false
		bare = false
		logallrefupdates = true
		symlinks = false
		ignorecase = true
		sparsecheckout = true
	```

4. Setting remote repository

	Setting remote repository of GitHub.

	```sh
	git remote add origin https://github.com/takyu/knowledge.git
	```

5. Setting specific directories to sparse-checkout option

	Write the specific directory you want to clone into sparse-checkout option.  
	The {wanna_sub_dir} after "echo" specifies a specific directory name that you want to clone.

	```sh
	echo wanna_sub_dir > .git/info/sparse-checkout
	```

6. git pull

	```sh
	git pull origin main
	```
