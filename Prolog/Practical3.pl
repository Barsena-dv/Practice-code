run:-
write('Enter the value of A :' ),
read(A),
write('Enter the value of B :' ),
read(B),
write('Enter the value of C :' ),
read(C),
D is (B*B)-(4*A*C),
root(A,B,C,D).
root(A,B,C,D):- A is 0.0,
write('Only one root exists.'),
ANS is (-C/B),
write(ANS);
D>=0,
E is sqrt(D),
ANS is (-B - E) / (2*A),
ANS1 is (-B + E) / (2*A),
write('First root is : '),
write(ANS),nl,
write('Second root is : '),
write(ANS1);
REAL is (-B) / (2*A), IMG
is sqrt(-D) / (2*A),
write('Real root is : '),
write(REAL),nl,
write('Imaginary root is : '),
write(IMG).
