import numpy as np


def get_key_matrix(key, size):
    key_matrix = [[ord(char) % 65 for char in key[i * size:(i + 1) * size]] for i in range(size)]
    return np.array(key_matrix)


def text_to_numbers(text):
    return [ord(char) % 65 for char in text]


def numbers_to_text(numbers):
    return ''.join(chr(num + 65) for num in numbers)


def encrypt_hill(plain_text, key):
    size = int(len(key) ** 0.5)
    key_matrix = get_key_matrix(key, size)
    text_numbers = text_to_numbers(plain_text)
    text_vector = np.array(text_numbers).reshape(-1, size)
    cipher_vector = np.dot(text_vector, key_matrix) % 26
    cipher_text = numbers_to_text(cipher_vector.flatten())
    return cipher_text


def mod_inverse(matrix, mod):
    determinant = int(round(np.linalg.det(matrix)))
    determinant_inv = pow(determinant, -1, mod)
    adjugate = np.round(determinant * np.linalg.inv(matrix)).astype(int) % mod
    return (determinant_inv * adjugate) % mod


def decrypt_hill(cipher_text, key):
    size = int(len(key) ** 0.5)
    key_matrix = get_key_matrix(key, size)
    inverse_key_matrix = mod_inverse(key_matrix, 26)
    text_numbers = text_to_numbers(cipher_text)
    text_vector = np.array(text_numbers).reshape(-1, size)
    plain_vector = np.dot(text_vector, inverse_key_matrix) % 26
    plain_text = numbers_to_text(plain_vector.flatten())
    return plain_text


if __name__ == "__main__":
    key = "PHEONIX"
    plain_text = "BARSENA DHRUV"
    cipher_text = encrypt_hill(plain_text, key)
    decrypted_text = decrypt_hill(cipher_text, key)

    print(f"Key: {key}")
    print(f"Plain Text: {plain_text}")
    print(f"Cipher Text: {cipher_text}")
    print(f"Decrypted Text: {decrypted_text}")
