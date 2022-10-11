# luck7
This chrome extension is a simple password generator, that generates a very secure password.

It generates a 12 digit password that meets the common strong password criteria:

+ Atleast 1 lower-case letter
+ Atleast 1 upper-case letter
+ Atleast 1 number
+ Atleast 1 special character
+ And length is more than 8 characters

This main idea behind is to create disposable passwords for disposable websites that mandates password criteria, and avoid annoying password generating sites.

Iam no security expert so I can only recommend you in not using it in applications of your concern.

Apart from that the generated password is only stored in your system **clipboard** and the program uses `Math.random()` to create randomness,
and just uses plain java script to generate password, and if you are familiar with it you can hack it to genereate password of any length.

So to save password you should manually paste or write somewhere, though I may add save functionality in future updates if I ever do.

![demo](https://github.com/darkhorse1925/luck7/blob/master/luck7_demo.png)
