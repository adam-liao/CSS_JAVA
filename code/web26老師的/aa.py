import random

# 設定標準答案為 1 到 100 之間的隨機整數
answer = random.randint(1, 100)
guess_count = 0  # 猜的次數限制
max_guesses = 5  # 最多猜五次

print("歡迎來玩猜數字遊戲！請輸入1～100之間的整數。")

while guess_count < max_guesses:
    try:
        guess = int(input("請輸入你的猜測："))
        
        if guess < 1 or guess > 100:
            print("請輸入1到100之間的整數！")
            continue

        guess_count += 1

        if guess > answer:
            print(f"比 {guess} 小")
        elif guess < answer:
            print(f"比 {guess} 大")
        else:
            print("恭喜～猜對了！")
            break

        print(f"你已經猜 {guess_count} 次了")
        
    except ValueError:
        print("請輸入有效的整數！")

# 超過猜測次數
if guess_count >= max_guesses and guess != answer:
    print(f"很可惜，你已經猜了 {max_guesses} 次了。遊戲結束！正確答案是 {answer}。")
