from django.core.mail import EmailMultiAlternatives


def sendMail(subject="Тема Письма", text_content="Сообщение",html_content=None, to:list=None):
	message = EmailMultiAlternatives(subject, text_content, to=to)
	message.mixed_subtype = 'related'
	message.attach_alternative(html_content, "text/html")
	message.send()

