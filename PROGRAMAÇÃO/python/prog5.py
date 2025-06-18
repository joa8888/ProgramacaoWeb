peso = float(input("Digite seu peso: "))
altura = float(input("Digite sua altura em metros: "))
imc = ((peso / (altura ** 2)))
print(f"Seu imc é: {imc}")
if (imc < 18.5):
    print("Você está abaixo do peso ideal")
elif (imc >= 18.5 and imc <= 24.9):
    print("Você está no peso ideal")
elif (imc >= 25 and imc <= 29.9):
    print("Você está acima do peso ideal")
elif (imc >= 30):
    print("Você está obeso")
