// Interface Segregation :- clients should not be forced to depend on one interface 
// , instead we should have client specific interfaces


class VegMenu {
    showMenu() {
        console.log("Showing vegetarian menu");
    }
}

class NonVegMenu {
    showMenu() {
        console.log("Showing non-vegetarian menu");
    }
}

class DessertsMenu {
    showMenu() {
        console.log("Showing desserts menu");
    }   
}

const main = () => {
    const vegMenu = new VegMenu();
    const nonVegMenu = new NonVegMenu();
    const dessertsMenu = new DessertsMenu();
    vegMenu.showMenu()
    nonVegMenu.showMenu()
    dessertsMenu.showMenu()
}

main()