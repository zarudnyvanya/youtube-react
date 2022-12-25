from django.core.mail import EmailMessage


def sendMail(subject="Тема Письма", body="Сообщение", to:list=None):
	mail = EmailMessage(subject, body, to=['fyfik105@gmail.com'])
	mail.send()
