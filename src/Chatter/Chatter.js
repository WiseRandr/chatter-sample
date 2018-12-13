class Chatter {
    get = () => {
        var chatter = window.localStorage.getItem('chatter')
        return chatter ? JSON.parse(chatter) : {};
    }

    isLogged = () => !!this.get().name;

    set = (chatter) => window.localStorage.setItem('chatter', JSON.stringify(chatter));
}

export default Chatter;