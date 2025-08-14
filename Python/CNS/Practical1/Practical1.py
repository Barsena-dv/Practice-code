msg = input("Enter the message: ")
encmsg = ""

for ch in msg:
    asc = ord(ch) + 3
    ench = chr(asc)
    encmsg += ench

print("Encrypted message:", encmsg)

encmsg1 = ""
for ch in encmsg:
    asc1 = ord(ch) - 3
    dech = chr(asc1)
    encmsg1 += dech

print("Decrypted message:", encmsg1)

print("Subject: Cryptography and Network Security")
print("Enrollment Number: 221260116002")
