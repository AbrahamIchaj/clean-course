(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?

    // function isRedFruit( fruit: string ): boolean {
    //     //mal código
    //      if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
    //         return true;
    //     } else {
    //         return false;
    //     } 
    
    function isRedFruit( fruit: string ): boolean {
            //mal código
            let redFruits: string[] = [ 'manzana','cereza','ciruela' ];
            return redFruits.includes( fruit );
    
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    // function getFruitsByColor( color: string ): string[] {
    //     //mal códiigo
       

    //     switch ( color ) {
    //         case'red':
    //             return ['manzana','fresa'];
    //         case 'yellow':
    //             return ['piña','banana'];
    //         case 'purple':
    //             return ['moras','uvas'];
    //         default:
    //             throw Error('the color must be: red, yellow, purple');
    // 

        type FruitColor = 'red'|'yellow'|'purple';

        function getFruitsByColor( color: FruitColor ): string[] {

            const fruitsByColor = {
                red:    [ 'manzana','fresa' ],
                yellow: ['piña','banana'],
                purple: ['moras','uvas'],
                
            };

            if (!Object.keys(fruitsByColor).includes(color)) {
            throw Error('the color must be');
            
        }

        }


    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = false;

    function workingSteps() {

        if ( !isFirstStepWorking )  return 'First Step broken';
        if ( !isSecondStepWorking ) return 'Second Step broken';
        if ( !isThirdStepWorking )  return 'Third Step broken';
        if ( !isFourthStepWorking ) return 'Fourth Step broken';


    return 'Working properly';



    //     //mal estructura del código
    //    if( isFirstStepWorking === true ) {
    //         if( isSecondStepWorking === true ) {
    //             if( isThirdStepWorking === true ) {
    //                 if( isFourthStepWorking === true ) {
    //                     return 'Working properly!';
    //                 }
    //                 else {
    //                     return 'Fourth step broken.';
    //                 }
    //             }
    //             else {
    //                 return 'Third step broken.';
    //             }
    //         }
    //         else {
    //             return 'Second step broken.';
    //         }
    //     }
    //     else {
    //         return 'First step broken.';
    //     }
    } //fin

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('manzana2'), fruit: 'manzana2' }); // true
    console.log({ isRedFruit: isRedFruit('manzana'), fruit: 'manzana' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();



/*
(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit( fruit: string ): boolean {
        //mal código
         if ( fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela' ) {
            return true;
        } else {
            return false;
        } 
    
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor( color: string ): string[] {
        //mal códiigo
         if ( color === 'red' ) {
            return ['manzana','fresa'];
        } else if ( color === 'yellow') {
            return ['piña','banana'];
        } else if ( color === 'purple') {
            return ['moras','uvas']
        } else {
            throw Error('the color must be: red, yellow, purple');
        } 

    }


    // Simplificar esta función
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        //mal estructura del código
       if( isFirstStepWorking === true ) {
            if( isSecondStepWorking === true ) {
                if( isThirdStepWorking === true ) {
                    if( isFourthStepWorking === true ) {
                        return 'Working properly!';
                    }
                    else {
                        return 'Fourth step broken.';
                    }
                }
                else {
                    return 'Third step broken.';
                }
            }
            else {
                return 'Second step broken.';
            }
        }
        else {
            return 'First step broken.';
        }
    }

    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
*/