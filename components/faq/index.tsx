import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>You Have Questions?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                  aliquet
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
  <BoxIcon />
  <Flex direction={'column'} css={{gap: '$3'}}>
    <Text h3>
      What is Sauti Salama?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Sauti Salama is a mobile application designed to support survivors of gender-based violence (GBV) in Kenya by providing access to legal, medical, and mental health resources.
    </Text>
    <Text h3>
      Who can use Sauti Salama?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Sauti Salama is available for all survivors of GBV, regardless of gender or social status.
    </Text>
    <Text h3>
      How does the Automatic Anonymous Mode work?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      This mode allows you to report abuse and access resources discreetly without revealing your identity.
    </Text>
    <Text h3>
      Is my information kept confidential?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Yes, your details are kept private and confidential. You can choose to provide your information only if you seek personalized support or legal aid.
    </Text>
    <Text h3>
      What kind of support does Sauti Salama offer?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Sauti Salama offers immediate emergency response, legal aid, medical care, mental health support, and access to a community of survivors and shelters.
    </Text>
    <Text h3>
      How do I join the waitlist for Sauti Salama?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      You can join the waitlist by filling out the form <a href="https://forms.gle/Q44QEkdrcSHmDYLq5">here</a>.
    </Text>
    <Text h3>
      Is Sauti Salama free to use?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Yes, the app is free to use for all survivors of GBV.
    </Text>
    <Text h3>
      How does Sauti Salama ensure my safety?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      The app is designed with multiple safety features, including anonymous reporting and secure data encryption to protect your information.
    </Text>
    <Text h3>
      What should I do if I am in immediate danger?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      If you are in immediate danger, use the emergency response feature in the app to get help right away.
    </Text>
    <Text h3>
      What devices is Sauti Salama compatible with?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Sauti Salama is compatible with most smartphones running Android and iOS.
    </Text>
    <Text h3>
      I’m experiencing technical issues. Who can I contact?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      If you encounter any technical problems, please reach out to our support team at <a href="mailto:support@sautisalama.org">support@sautisalama.org</a>.
    </Text>
    <Text h3>
      How can I access legal aid through Sauti Salama?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      You can request legal aid through the app, and our network of lawyers will reach out to you for assistance.
    </Text>
    <Text h3>
      Are the mental health professionals qualified?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Yes, all mental health professionals available through Sauti Salama are certified and experienced in dealing with trauma and GBV cases.
    </Text>
    <Text h3>
      How can I provide feedback about the app?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      We value your feedback. You can provide feedback directly through the app or email us at <a href="mailto:feedback@sautisalama.org">feedback@sautisalama.org</a>.
    </Text>
    <Text h3>
      Will there be updates to the app?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Yes, we continuously work on improving Sauti Salama and will release updates regularly to enhance your experience.
    </Text>
    <Text h3>
      Can I connect with other survivors through the app?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      Yes, Sauti Salama offers a community feature where you can connect with other survivors and support each other.
    </Text>
    <Text h3>
      What if I need resources not available in the app?
    </Text>
    <Text
      span
      css={{
        color: '$accents8',
      }}
    >
      If you need additional resources, please contact our support team, and we will do our best to assist you.
    </Text>
  </Flex>
</Flex>

{/* 
               <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet aliquet Lorem ipsum dolor sit amet, consectetur
                        adipiscing adipiscing elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, aliquet
                     </Text>
                  </Flex>
               </Flex> */}

               {/* <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text>
                  </Flex>
               </Flex> */}

               {/* <Flex css={{gap: '$5'}} justify={'center'}>
                  <BoxIcon />
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed condimentum, nisl ut aliquam lacinia, nisl nisl
                        aliquet aliquet Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                        nisl aliquet aliquet elit. Sed condimentum, nisl ut
                        aliquam lacinia, nisl nisl aliquet aliquet elit. Sed
                        condimentum, nisl ut aliquam lacinia, nisl nisl aliquet
                        aliquet elit. Sed condimentum, nisl ut aliquam lacinia,
                        nisl nisl aliquet aliquet
                     </Text>
                  </Flex>
               </Flex> */}
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
