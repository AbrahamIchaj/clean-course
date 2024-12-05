(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActorById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie{
        cast:        string[];
        description: string; 
        rating:      number;
        title:       string;
    }

    function createMovie({ title, description, rating, cast } : Movie)  {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {

        //tarea asincrona para verificar nombre
        //..
        //..
        
        if (fullName == 'fernando') return false;

    console.log('Crear actor');
    return true;

    }


    //Continuación

    const getpaymount = ({ isDead = false, isSeparate = true, isRetired = false }): number => {
            
       
        if ( isDead ) return 1500;
        
        if ( isSeparate ) return 2500;

        return ( isRetired ) ? 3000 : 4000;

    }



    //Continuacion ejemplo
//     const getpaymount = ({ isDead = false, isSeparate = true, isRetired = false }): number => {
//         let result: number;
//         if ( isDead ) {
//             result = 1500;
//         }else{
//             if ( isSeparate ) {
//                 result = 2500;
//             } else {
//                 if ( isRetired ) {
//                     result = 3000;
//                 } else {
//                     result = 4000;
//                 }
//             }
//         }
//         return result;
// }






})();

// (() => {

//     // función para obtener información de una película por Id
//     function getAllMovies( movieId: string ) {
//         console.log({ movieId });
//     }

//     // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
//     function getAllMovieActors( id: string ) {
//         console.log({ id });
//     }

//     // funcion para obtener el bio del actor por el id
//     function getUsuario( ActorId: string ) {
//         console.log({ ActorId });
//     }
    
//     // Crear una película
//     function movie(title: string, description: string, rating: number, cast: string[] ) {
//         console.log({ title, description, rating, cast });
//     }

//     // Crea un nuevo actor
//     function createActorIfActorNoExists( fullName: string, birthdate: Date ): boolean {

//         //tarea asincrona para verificar nombre
//         //..
//         //..

//         if (fullName == 'fernando') return false;

//     console.log('Crear actor');
//     return true;

//     }


// })();


