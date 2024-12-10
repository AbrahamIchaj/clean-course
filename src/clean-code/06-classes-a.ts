(() =>{

    type Gender = 'M'|'F';

    class Person {
        public name:     string;
        public gender:   Gender;
        public birhdate: Date;

        constructor( name: string, gender: Gender, birthdate: Date){
            this.name =     name;
            this.gender =   gender;
            this.birhdate = birthdate;
        }
    }

    const newPerson = new Person( 'Abraham','M', new Date( '1990-10-01' ));
    console.log( {newPerson} );
    
    

})();