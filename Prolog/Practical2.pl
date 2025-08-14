brother(dhruv,vishal).
brother(vishal,dhruv).
brother(dhruv,avneesh).
cousin(X,Y):-brother(X,Y),brother(Y,X).


