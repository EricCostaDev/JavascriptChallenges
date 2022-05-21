const letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const capitaLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+','-'];

function generateSecurePassword(length,unique,caps,numbers,special) {
    let password = '';

    if(length>=4){
       let random_1 = 0;
       let arr_rand = []
       arr_rand = [...arr_rand,...letter];

       if(numbers){
            arr_rand = [...arr_rand,...number];
       }
       if(caps){
            arr_rand = [...arr_rand,...capitaLetter];
       }
       if(special){
           arr_rand = [...arr_rand,...specialChar];
       }
        
        for(let i = 0; i < length; i++) {
            random_1 = Math.floor(Math.random() * arr_rand.length);
            
            if (unique){
                let existis = password.split('').includes(arr_rand[random_1]);
                while(existis){
                    existis = password.split('').includes(arr_rand[random_1]);
                    random_1 = Math.floor(Math.random() * arr_rand.length);
                }
                password += arr_rand[random_1];
            }else{
                password += arr_rand[random_1];
            }   
        }
    }else{
        throw new Error('Password must be at least 4 characters long');
    }
    return password;
}

console.log(generateSecurePassword(3000,false,true,true,true))