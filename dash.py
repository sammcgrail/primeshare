import os
import dotenv
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
dotenv.load_dotenv(dotenv_path)

from scapy.all import *
from twilio.rest import TwilioRestClient

account = os.environ.get("TWILIO_ACCOUNT_SID")
token = os.environ.get("TWILIO_AUTH_TOKEN")
client = TwilioRestClient(account, token)

def arp_display(pkt):
  if pkt[ARP].op == 1 &&
    if pkt[ARP].psrc == '0.0.0.0':
      if pkt[ARP].hwsrc == '74:75:48:a6:4c:cf':
        print "Pushed Kraft Dinner"
        sms = client.messages.create(
          to=os.environ.get("TO_PHONE_NUMBER"),
          from_=os.environ.get("FROM_PHONE_NUMBER"),
          body="Hello, from the Barn butan!"
        )
        print sms.sid
      else:
        print "ARP Probe from unknown device: " + pkt[ARP].hwsrc

print sniff(prn=arp_display, filter="arp", store=0)
