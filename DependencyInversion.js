// Dependency inversion :- high level models should not depend upon low level models, both should be depend on abstractions

class IVersionControl {
    commit () {
        throw new Error("First Implement the commit method");
    }
    push () {
        throw new Error("First Implement the push method");
    }
    pull () {
        throw new Error("First Implement the pull method");
    }
}

class Git extends IVersionControl {
    commit () {
        console.log("Committing changes to Git repository");
    }
    push () {
        console.log("Pushing changes to Git repository");
    }
    pull () {
        console.log("Pulling changes from Git repository");
    }
}

class DevelopmentTeam {
    constructor (versioncontrol) {
        this.versioncontrol = versioncontrol;
    }
    commit () {
        this.versioncontrol.commit()
    }
    push () {
        this.versioncontrol.push()
    }
    pull () {
        this.versioncontrol.pull()
    }
}

const main = () => {
    const git  = new Git()
    const developerTeam = new DevelopmentTeam(git);
    developerTeam.commit()
    developerTeam.push()
    developerTeam.pull()
}


main()