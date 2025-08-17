// import { View, Text,StyleSheet } from 'react-native'
// import React from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'

// const Dashbord = () => {
//   return (
//     <SafeAreaView style={styles.safecontainer} >
//       <View style={styles.headerContainer}>
//       <View>
//       <Text style={styles.header}>Dashbord</Text>
//     </View>
//     </View>
//     </SafeAreaView>
    
//   )
// }

// export default Dashbord

// const styles= StyleSheet.create({

// safecontainer:{
//   flex:1,
//   backgroundColor:'white',
//   borderRadius:12,
//   // borderWidth:2,
//   // borderColor:'black',
//   margin:10,

// },
//  headerContainer: {
//     backgroundColor: '#95bfebff', // iOS style blue, tu apne theme ke hisaab se change kar
//     paddingVertical: 15,
//     paddingHorizontal: 10,
//     shadowColor: '#000', // iOS shadow
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 4, // Android shadow
//     borderBottomLeftRadius: 12,
//     borderBottomRightRadius: 12,
//   },
// header:{
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: 'black',
//     textAlign: 'center',
// }
  
// });



import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { FlatList } from 'react-native';
import { Image } from 'react-native';



const marathiBooks = [
  { 
    id: '1', 
    title: 'Shyamchi Aai', 
    author: 'Sane Guruji', 
    image: require('../Assets/marathi_Img/shyam.jpg'), 
       content: `📖 *श्यामची आई – सारांश*\n\nमराठी साहित्यामधील सर्वात हृदयस्पर्शी आत्मकथात्मक कादंबरी म्हणजे **"श्यामची आई" (लेखक – साने गुरुजी)**.\nही कथा म्हणजे एका मुलाचे **बालपण, त्याचे संस्कार आणि त्याच्या आईचे प्रेम व त्याग** यांचे चित्रण आहे.\n\nकथा संक्षेप :\n**श्याम** हा निरागस, प्रामाणिक, हुशार आणि मेहनती मुलगा आहे.\nत्याचे **वडील कडक, शिस्तप्रिय पण रागीट** स्वभावाचे आहेत.\nश्यामच्या आयुष्याचा खरा आधार म्हणजे त्याची **आई**.\nआई त्याला लहानपणापासूनच शिकवते :\n**सत्य बोलावे**\n**प्रामाणिक राहावे**\n**मेहनत करावी**\n**इतरांना मदत करावी**\n**गरीबी असूनही** आई श्यामला नेहमी शिकवते की *"चांगला माणूस होणे हेच खरे धन आहे."*\nश्याम चुका करतो, पण आई त्याला **प्रेमाने समजावते**, कधी कठोर शब्द न वापरता.\nआईच्या संस्कारांमुळे श्याम आयुष्यभर योग्य मार्गावर राहतो.\n\nमहत्वाचे मुद्दे :\n**आईचे नि:स्वार्थ प्रेम आणि त्याग**\n**सत्य, प्रामाणिकपणा, दया आणि मेहनतीचे संस्कार**\n**गरीबी असूनही मूल्यांनी श्रीमंत आयुष्य**\n**आई हीच खरी गुरू व शाळा आहे**\n\nशेवट :\nकथेच्या शेवटी श्यामची आई आजारी पडते आणि तिचा मृत्यू होतो.\nहा प्रसंग श्यामच्या आयुष्यात **मोठा धक्का** ठरतो.\nपण आईने दिलेली **शिकवण, माया आणि संस्कार** त्याला आयुष्यभर मार्गदर्शक ठरतात.\n\n👉 म्हणूनच **"श्यामची आई" ही प्रत्येक आईच्या त्यागाची, प्रेमाची आणि मायेची कहाणी आहे.**`,
  },
  { 
    id: '2', 
    title: 'Kosala', 
    author: 'Bhalchandra Nemade',
    image: require('../Assets/marathi_Img/kosala.jpg'), 
    content: `📖 *कोसला – सारांश*\n**लेखक – भालचंद्र नेमाडे**\n**प्रकाशन – 1963**\n**प्रकार – आत्मकथनात्मक / अस्तित्ववादी कादंबरी**\n\nकथा संक्षेप :\n**मुख्य पात्र – पांडुरंग सांगवकर**\nही कथा एका तरुणाच्या **आयुष्याविषयीच्या शोधाची** आहे.\nपांडुरंग हा **ग्रामीण पार्श्वभूमीतला तरुण**, ज्याला शिक्षणासाठी पुण्यात पाठवले जाते.\nतो **जगाकडे पाहण्याचा, जीवनाचा अर्थ शोधण्याचा प्रयत्न** करतो.\nपण त्याला नेहमी **हाताशी येते ते अपयश, एकटेपणा आणि गोंधळलेले आयुष्य**.\nपांडुरंगाला अभ्यास, मित्र, नाती, प्रेम – काहीच स्थिर वाटत नाही.\nत्याच्या आयुष्यात अनेक व्यक्ती येतात :\n**मित्र** – पण कोणी खरं सोबत देत नाही.\n**प्रियसी (मल्ली)** – पण प्रेमसुद्धा अपूर्णच राहते.\n**कुटुंब** – पण घराशीही दुरावा निर्माण होतो.\nशेवटी त्याला वाटते की **जगण्याला निश्चित असा काही अर्थ नाही.**\n\nमहत्वाचे मुद्दे :\n**अस्तित्ववाद (Existentialism)** – जीवनाचा अर्थ शोधण्याचा प्रयत्न.\n**तरुणांचे वास्तव** – असमाधान, संघर्ष, एकाकीपणा.\n**पारंपरिक मूल्यांना नाकारणे** – जुन्या चौकटींपासून सुटका.\n**कोसला = कैद/जाळं** – पांडुरंगाला जगणं म्हणजे एक कोठडीत अडकलेलं आयुष्य वाटतं.\n\nशैली (Style):\n**पहिल्या पुरुषी (First person narration)** – जणू स्वतःचं आत्मकथन.\n**निखळ वास्तव** – सजावट नाही, सरळ बोलणं.\n**बंडखोर स्वर** – समाज व परंपरेविरोधात प्रश्न.\n\nशेवट :\nपांडुरंग सांगवकर आयुष्याचा अर्थ शोधत राहतो, पण त्याला कुठेही समाधान मिळत नाही.\nकादंबरी **उत्तर न देता प्रश्न निर्माण करते** – आणि वाचकाला विचार करायला लावते.\n\n👉 म्हणूनच **“कोसला” ही मराठी कादंबरीतली क्रांतिकारी कादंबरी** मानली जाते.\nही **तरुण पिढीच्या अस्वस्थतेची, अस्तित्वाच्या शोधाची आणि बंडखोरीची कथा** आहे.`
  },
  { 
    id: '3', 
    title: 'Mrutyunjay', 
    author: 'Shivaji Sawant',
   image: require('../Assets/marathi_Img/mrutunjay.jpg'), 
   content:'`📖 *मृत्युंजय – सारांश*\n**लेखक – शिवाजी सावंत**\n**प्रकार – ऐतिहासिक / पौराणिक कादंबरी**\n**मुख्य पात्र – कर्ण**\n**प्रकाशन – 1967**\n\nकथा संक्षेप :\n**महाभारतातील महान पण शोकांत वीर – कर्ण** याचे जीवन ही कादंबरी सांगते.\nकर्ण हा **सूर्यपुत्र**, पण जन्मतःच *कुंती*ने त्याला सोडून दिले.\nत्यामुळे तो वाढतो **रथी अधिरथ व राधा यांच्या घरी**.\nसमाज त्याला नेहमी **सूतरपुत्र (खालच्या जातीचा)** म्हणून हिणवतो.\nपण कर्णाला हवी होती **प्रतिष्ठा, ओळख आणि मान्यता**.\nकर्णाचे आयुष्य :\n**शौर्य आणि पराक्रम** – उत्तम धनुर्धर, अर्जुनाइतकाच समर्थ.\n**मैत्री** – दुर्योधनाचा जीवाभावाचा मित्र, त्याच्यासाठी सर्वस्व अर्पण करतो.\n**दानवीर कर्ण** – कोणाच्याही हातातून काही मागितले की नकार देत नाही.\n**शोकांतिका** – स्वतःचे खरे ओळख (सूर्यपुत्र, पांडवांचा भाऊ) कळते पण उशिरा.\n**महाभारत युद्धात** – अर्जुनाकडून मृत्यु, पण मृत्यूनंतर तोच खरा *“मृत्युंजय”* ठरतो.\n\nमहत्वाचे मुद्दे :\n**कर्णाचा संघर्ष** – जातीभेद, उपेक्षा, समाजाचा अन्याय.\n**मैत्री आणि कर्तव्य** – दुर्योधनाशी असलेली निष्ठा.\n**दानशीलता** – आयुष्यभर देतच राहिला.\n**शोकांत वीर** – महान असूनही नशिबाने पराभूत.\n**मानवी मूल्ये** – प्रामाणिकपणा, त्याग, करुणा.\n\nकादंबरीची रचना :\nही कादंबरी **“अनेक दृष्टिकोनातून”** लिहिलेली आहे.\nकर्ण स्वतः\nकुंती\nदुर्योधन\nश्रीकृष्ण\nअश्वत्थामा\nराधा\n→ प्रत्येकजण कर्णाबद्दल आपले अनुभव सांगतो. त्यामुळे कर्णाचे व्यक्तिमत्त्व विविध अंगांनी उलगडते.\n\nशेवट :\nकर्णाचा मृत्यु जरी युद्धभूमीवर झाला तरी त्याचे आयुष्य **शौर्य, मैत्री, त्याग आणि संघर्षाने परिपूर्ण** होते.\nत्यामुळे तो **“मृत्युंजय” – मृत्यु जिंकलेला वीर** म्हणून अमर झाला.\n\n👉 म्हणूनच **“मृत्युंजय” ही मराठीतील सर्वात लोकप्रिय पौराणिक कादंबरी** ठरली.\nती कर्णाच्या **संघर्षाची, शौर्याची आणि शोकांतिकेची कहाणी** आहे'
  },
  { 
    id: '4', 
    title: 'Yayati', 
    author: 'V. S. Khandekar',
   image: require('../Assets/marathi_Img/yayati.jpg'),
   content:'📖 *ययाति – सारांश*\n**लेखक – वि. स. खांडेकर**\n**प्रकार – पौराणिक / तत्त्वचिंतनात्मक कादंबरी**\n**मुख्य पात्र – राजा ययाति**\n**प्रकाशन – 1959**\n**साहित्य अकादमी पुरस्कार – 1960**\n\nकथा संक्षेप :\n**ययाति** हा महाभारतातील एक राजा.\nत्याचे जीवन ही कादंबरी **वासना, लोभ, महत्त्वाकांक्षा आणि मानवी दुर्बलता** यांचे प्रतीक आहे.\nययातिचा विवाह **देवयानी** (शुक्राचार्यांची कन्या) सोबत होतो.\nनंतर तो **शर्मिष्ठा** (असुरांची राजकन्या व देवयानीची सखी) हिच्यावरही आसक्त होतो.\nयामुळे **देवयानी दुखावते, शुक्राचार्य रागावतात** आणि ययातिला *शाप* देतात –\n👉 "तुला अकाली वार्धक्य येईल."\nपण ययाति **वासनेतून मुक्त होऊ शकत नाही.**\nतो आपल्या मुलांना विचारतो की कोण वार्धक्य देईल?\n**पुत्र यदु, तुर्य, द्रुह्यु, अनु** – सर्व नकार देतात.\nपण **पुत्र पुरु** त्याग करतो आणि पित्याला तारुण्य देतो.\nययाति पुन्हा भोगांत रमतो, पण शेवटी जाणवते –\n👉 *“वासना कधीच संपत नाही, ती वाढतच राहते.”*\nशेवटी तो पुरुचे तारुण्य परत देतो आणि म्हणतो :\n👉 *“वासना शमविण्याचा एकच मार्ग आहे – संयम.”*\n\nमहत्वाचे मुद्दे :\n**वासना व भोग यांचे आकर्षण**\n**लोभ व महत्त्वाकांक्षा माणसाला अंध बनवतात**\n**त्याग आणि कर्तव्य** – पुरुचे आदर्श व्यक्तिमत्त्व\n**तत्त्वज्ञान** – भोगातून कधीच समाधान मिळत नाही\n**मानवी जीवनाचा संदेश** – संयम, त्याग आणि जबाबदारी हाच खरा मार्ग\n\nशेवट :\nययाति शेवटी जाणतो की –\n👉 *“जीवनाचा खरा आनंद भोगात नाही तर संयम व कर्तव्यात आहे.”*\nत्यामुळे **“ययाति” ही केवळ पौराणिक कथा नसून मानवी स्वभावाचे गहन तत्त्वज्ञान सांगणारी कादंबरी आहे.**\n\n👉 म्हणूनच **“ययाति” ला 1960 मध्ये साहित्य अकादमी पुरस्कार** मिळाला आणि ती मराठी साहित्यातील एक **अजरामर कादंबरी** ठरली.'
  },
];

const hindiBooks=[

  {
    id:'1',
    title:'Agni ki Udhan',
    author:'A.P.J Abdul kalam',
    image: require('../Assets/hindi_img/apj.jpg'),
    content:'📖 *अग्नि की उड़ान – सारांश*\n**लेखक – डॉ. ए. पी. जे. अब्दुल कलाम**\n(सह-लेखक – अरुण तिवारी)\n**प्रकार – आत्मकथा**\n**प्रकाशन – 1999**\n\nकथा संक्षेप :\nयह आत्मकथा डॉ. कलाम के जीवन की प्रेरणादायक यात्रा है।\n**बचपन** –\nडॉ. कलाम का जन्म 1931 में **रामेश्वरम (तमिलनाडु)** के एक साधारण मुस्लिम परिवार में हुआ।\nपरिवार आर्थिक रूप से गरीब था, लेकिन **ईमानदारी, मेहनत और शिक्षा** पर गहरा विश्वास था।\n**शिक्षा** –\nबचपन से ही उन्हें पढ़ाई और विज्ञान में गहरी रुचि थी।\nउन्होंने **भौतिकी और एयरोनॉटिकल इंजीनियरिंग** में शिक्षा प्राप्त की।\n**संघर्ष** –\nपढ़ाई के दौरान अनेक कठिनाइयाँ आईं – गरीबी, साधन की कमी, लेकिन उनका **जुनून और मेहनत** कभी कम नहीं हुआ।\n**विज्ञान और तकनीक** –\nवे भारत के **रक्षा अनुसंधान संगठन (DRDO)** और बाद में **ISRO** से जुड़े।\nउन्होंने **SLV-3 (Satellite Launch Vehicle)**, **प्रक्षेपास्त्र कार्यक्रम (Missile Programme – अग्नि, पृथ्वी, नाग, आकाश, त्रिशूल)** में अहम भूमिका निभाई।\n**मानवता और नेतृत्व** –\nवे सिर्फ वैज्ञानिक ही नहीं, बल्कि **मानवता से जुड़े, प्रेरणादायक और विनम्र व्यक्तित्व** थे।\n\nप्रमुख संदेश :\n**मेहनत और लगन से असंभव को संभव बनाया जा सकता है।**\n**गरीबी या कठिनाइयाँ कभी बाधा नहीं होतीं, अगर इरादे मजबूत हों।**\n**युवा पीढ़ी ही देश का भविष्य है।**\n**विज्ञान और प्रौद्योगिकी से भारत को आत्मनिर्भर बनाया जा सकता है।**\n\nउपसंहार :\nडॉ. ए. पी. जे. अब्दुल कलाम ने अपनी आत्मकथा के जरिए यह सिखाया कि –\n👉 *“सपने वो नहीं होते जो नींद में आते हैं, सपने वो होते हैं जो आपको सोने नहीं देते',
  },
  {
    id:'2',
    title:'Think And Grow Rich',
    author:'Nepolian Hile',
    image: require('../Assets/hindi_img/thin.jpg'),
    content:'📖 *थिंक एंड ग्रो रिच – सारांश*\n**लेखक – नेपोलियन हिल**\n**प्रकाशन – 1937**\n**प्रकार – प्रेरणादायक / आत्म-विकास पुस्तक**\n\nमुख्य विचार :\nयह किताब बताती है कि **सफलता और धन कमाने की कुंजी सिर्फ मेहनत नहीं, बल्कि सही सोच और योजना है।**\n👉 *“मनुष्य जैसा सोचता है, वैसा ही बनता है।”*\n\nसफलता के 13 सिद्धांत (हाइलाइट) :\n**इच्छा (Desire)** –\nकिसी भी लक्ष्य को पाने की *जलती हुई तीव्र इच्छा* ही सफलता का पहला कदम है।\n**विश्वास (Faith)** –\nखुद पर विश्वास रखो कि तुम लक्ष्य पा सकते हो।\n**आत्म-सुझाव (Autosuggestion)** –\nअपने अवचेतन मन (Subconscious Mind) को सकारात्मक विचार दो।\n**विशेष ज्ञान (Specialized Knowledge)** –\nसिर्फ सामान्य ज्ञान काफी नहीं, बल्कि किसी क्षेत्र में *विशेष ज्ञान* ज़रूरी है।\n**कल्पना शक्ति (Imagination)** –\nबड़ी उपलब्धियाँ हमेशा *कल्पना* से शुरू होती हैं।\n**संगठित योजना (Organized Planning)** –\nइच्छा और कल्पना को हकीकत बनाने के लिए ठोस योजना बनाओ।\n**निर्णय क्षमता (Decision)** –\nसफल लोग जल्दी निर्णय लेते हैं और उसे बार-बार बदलते नहीं।\n**लगातार प्रयास (Persistence)** –\nमुश्किलों के बावजूद *हार न मानना* ही सफलता का राज है।\n**मास्टर माइंड (Mastermind)** –\nअपने जैसे लक्ष्य रखने वाले लोगों का समूह बनाओ, जिससे *ज्ञान और ऊर्जा* मिले।\n**यौन ऊर्जा का रूपांतरण (Sexual Transmutation)** –\nमनुष्य की गहरी भावनाओं और ऊर्जा को *रचनात्मक काम* में लगाओ।\n**अवचेतन मन (Subconscious Mind)** –\nइसमें सकारात्मक विचार भरो, यही जीवन की दिशा तय करता है।\n**मस्तिष्क (Brain)** –\nयह *विचारों का प्रसारण और ग्रहण केंद्र* है। सही विचारों से इसे भरना ज़रूरी है।\n**छठी इंद्रिय (Sixth Sense)** –\nअनुभव और अंतर्ज्ञान (Intuition) से आने वाली *भीतरी आवाज़* पर भरोसा करो।\n\nअंतिम संदेश :\n👉 *“सफलता उन्हीं को मिलती है जिनके पास जलती हुई इच्छा, अटूट विश्वास और लगातार प्रयास करने का साहस होता है।”*\n👉 *“Think and Grow Rich” सिर्फ अमीर बनने की किताब नहीं, बल्कि **सफल जीवन जीने का सूत्र** है।*'
  },
  {
    id:'3',
    title:'gunaho Ka Devata',
    author:'Dharmveer Bharti',
    image: require('../Assets/hindi_img/gunha.jpg'),
    content:'📖 *गुनाहों का देवता – सारांश*\n**लेखक – धर्मवीर भारती**\n**प्रकाशन – 1949**\n**प्रकार – प्रेमकथा / सामाजिक उपन्यास**\n\nकथा संक्षेप :\nयह उपन्यास **चंद्रुली (इलाहाबाद) विश्वविद्यालय** की पृष्ठभूमि पर आधारित है।\nकहानी है – **चंदा** और **चंद्रमोहन (चंदर)** की।\n**चंदर** – गरीब लेकिन मेधावी, ईमानदार और संवेदनशील छात्र।\n**चंदा** – पंडित विद्यारत्न की बेटी, सुंदर, सुसंस्कृत, मासूम।\nचंदर और चंदा एक-दूसरे को **दिल से चाहते हैं**, लेकिन समाज और परंपराएँ उनके प्रेम के बीच आ खड़ी होती हैं।\nचंदर सोचता है कि – *“गुरु की बेटी से विवाह करना गुनाह है।”*\nइसलिए वह **अपने प्रेम को दबा देता है** और चंदा से दूर हो जाता है।\nचंदा की शादी कहीं और हो जाती है, लेकिन उसका दिल चंदर के पास ही रह जाता है।\nचंदर के जीवन में कई और स्त्रियाँ आती हैं, लेकिन उसका दिल हमेशा चंदा से जुड़ा रहता है।\nअंततः यह प्रेमकथा **अधूरी** रह जाती है।\n\nमुख्य विषय :\n**आत्मसंयम बनाम प्रेम** – चंदर का आत्मबलिदान।\n**समाज और परंपराएँ** – कैसे रिश्तों को तोड़ देती हैं।\n**आध्यात्मिक प्रेम** – चंदर और चंदा का बंधन शारीरिक नहीं, बल्कि आत्मिक है।\n**त्याग और बलिदान** – प्रेम को त्यागना ही चंदर को *“गुनाहों का देवता”* बना देता है।\n\nउपसंहार :\n👉 यह उपन्यास सिखाता है कि –\n*सच्चा प्रेम हमेशा आत्मा में बसा रहता है, चाहे समाज उसे स्वीकार करे या नहीं।*\n👉 **“गुनाहों का देवता” हिंदी साहित्य की सबसे लोकप्रिय प्रेमकथाओं में गिना जाता है।*',
  },
  {
    id:'4',
    title:'Ashad Ek Din',
    author:'Mohan Rakesh',
    image: require('../Assets/hindi_img/ashad.jpg'),
    content:'`🎭 *आषाढ़ का एक दिन – सारांश*\n**लेखक – मोहन राकेश**\n**प्रकाशन – 1958**\n**प्रकार – नाटक (आधुनिक हिंदी रंगमंच का शिखर नाटक)**\n\nकथा संक्षेप :\nयह नाटक **संस्कृत महाकवि कालिदास** के जीवन और उनके प्रेम पर आधारित है।\n**कालिदास** – एक प्रतिभाशाली लेकिन सरल, असंकोची युवक।\n**मल्लिका** – एक भोली, निश्छल, गाँव की लड़की, जो कालिदास से गहरा प्रेम करती है।\nकालिदास और मल्लिका का प्रेम पवित्र और सच्चा है।\nउज्जयिनी का राजदरबार कालिदास की प्रतिभा पहचानता है और उन्हें राजधानी बुला लेता है।\nकालिदास **महिमा और प्रतिष्ठा** की ओर आकर्षित हो जाते हैं और मल्लिका को छोड़कर उज्जयिनी चले जाते हैं।\nमल्लिका उनका इंतजार करती है, लेकिन कालिदास वापस नहीं आते।\nअंततः मल्लिका का जीवन **विरह और त्याग** में बीत जाता है।\n\nमुख्य विषय :\n**प्रेम बनाम महत्वाकांक्षा** – कालिदास की महत्वाकांक्षा उनके प्रेम पर भारी पड़ती है।\n**त्याग और विरह** – मल्लिका का जीवन प्रेम के इंतज़ार और त्याग में बीतता है।\n**कलाकार का द्वंद्व** – कला और निजी जीवन के बीच संघर्ष।\n**स्त्री का बलिदान** – मल्लिका का चरित्र भारतीय स्त्री की सहनशीलता और त्याग का प्रतीक है।\n\nउपसंहार :\n👉 *“आषाढ़ का एक दिन”* में प्रेम की गहराई और महत्वाकांक्षा का संघर्ष दिखाया गया है।\n👉 यह नाटक सिखाता है कि **प्रतिष्ठा और वैभव प्रेम की पवित्रता का विकल्प नहीं बन सकते**',
  }
];
const EnglishBook = [
  {
    id: '1',
    title: 'Atomic Habit',
    author: 'James Clear',
    image: require('../Assets/English_img/Atomic.jpg'),
    content:'📖 *Atomic Habits – Summary*\n**Author – James Clear**\n**Published – 2018**\n**Genre – Self-help / Personal Development**\n\nCore Idea:\n👉 *“Small habits, when repeated consistently, lead to remarkable results.”*\nThe book explains how **tiny daily improvements (1% better every day)** can compound into massive growth, while small bad habits can drag life down.\n\nKey Principles:\n**The 1% Rule**\nSmall improvements each day = big success in the long run.\nSuccess is not about radical change, but about *consistency*.\n**The 4 Laws of Behavior Change:**\n**Cue** – Make it obvious.\n**Craving** – Make it attractive.\n**Response** – Make it easy.\n**Reward** – Make it satisfying.\n**Identity-based habits:**\nInstead of focusing only on goals (*I want to lose 10 kg*), focus on identity (*I am a healthy person*).\nYour habits reflect **who you become**.\n**Habit Stacking:**\nLink a new habit to an existing one.\nExample: *After brushing teeth, I will meditate for 2 minutes.*\n**Environment matters more than motivation:**\nDesign your surroundings to support good habits.\nExample: Keep books on the table if you want to read, hide junk food if you want to eat healthy.\n**The Plateau of Latent Potential:**\nResults don’t appear immediately. Habits need time to show impact (like ice melting at 0°C after long cooling).\n\nImportant Messages:\n**“You do not rise to the level of your goals, you fall to the level of your systems.”**\n**Habits = Compound Interest of Self-Improvement.**\n**Break bad habits by inverting the 4 laws** (make them invisible, unattractive, difficult, unsatisfying).\n\nConclusion:\n👉 *Atomic Habits* teaches that **tiny consistent changes create extraordinary results.**\n👉 Focus on **systems, not goals**. Build an identity that matches the person you want to become.\n\n✨ That’s why this book is considered one of the **best guides on personal transformation and productivity.**'
  },
  {
    id: '2',
    title: 'Rich Dad Poor Dad',
    author: 'Robert T. Kiyosaki',
    image: require('../Assets/English_img/pooor.jpg'),
    content:'📖 *Rich Dad Poor Dad – Summary*\n**Author – Robert T. Kiyosaki**\n**Published – 1997**\n**Genre – Personal Finance / Self-help**\n\nCore Idea:\n👉 The book contrasts the **financial mindset of two fathers** –\n**Poor Dad** (his biological father, educated but financially poor)\n**Rich Dad** (his friend’s father, less formally educated but financially wise).\nThrough their lessons, Kiyosaki explains how **wealth is created not by working for money, but by making money work for you.**\n\nKey Lessons:\n**The Rich Don’t Work for Money**\nPoor Dad → *Work hard for a paycheck.*\nRich Dad → *Learn how money works, then make it work for you.*\n**Financial Literacy**\nUnderstand the difference between:\n**Assets** – things that put money into your pocket (investments, rental income).\n**Liabilities** – things that take money out of your pocket (loans, luxury items).\n👉 *“Buy assets, reduce liabilities.”*\n**Mind Your Own Business**\nDon’t just work for others. Build your own business and investments.\n**The Power of Corporations**\nRich people use **business structures, tax advantages, and investments** to grow wealth.\n**The Rich Invent Money**\nOpportunities are everywhere. Learn to recognize and seize them.\n**Work to Learn, Not to Earn**\nDevelop skills like sales, marketing, investing, and leadership.\nJobs give experience, but skills give freedom.\n\nImportant Quotes / Messages:\n**“The rich focus on assets. The poor and middle class focus on income.”**\n**“Financial education is the real wealth.”**\n**“It’s not how much money you make, it’s how much you keep.”**\n\nConclusion:\n👉 *Rich Dad Poor Dad* teaches that **true financial freedom comes from financial literacy, smart investing, and building assets – not just earning a salary.**\n\n✨ That’s why this book became one of the **world’s most influential personal finance books.**',
  },

  {
    id:'3',
    title:"Sunrise on the Reaping  ",
    author:" Suzanne Collins",
    image: require('../Assets/English_img/sunrise.jpg'),
    content:'*Sunrise on the Reaping – Summary*\n**Author – Suzanne Collins**\n**Published – 2025**\n**Genre – Young Adult / Dystopian Fiction**\n\nCore Concept:\nSet 24 years before the original series and during the **50th Hunger Games (Second Quarter Quell)**, this novel focuses on **16-year-old Haymitch Abernathy'
  }
];


const MarathiScreen = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, padding: 10 }}>
    <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Marathi Books</Text>
    <FlatList
      data={marathiBooks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })}>
          <View style={styles.bookItem}>
            <Image source={item.image} style={styles.bookImage} resizeMode="contain" />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>by {item.author}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </SafeAreaView>
);




const HindiScreen = ({ navigation}) => (
  <SafeAreaView style={{flex:1,padding:10}}>
   <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>Hindi Books</Text>

 <FlatList
      data= {hindiBooks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
         <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })}>
        <View style={styles.bookItem}>
          
            <Image source={item.image} style={styles.bookImage} resizeMode="contain" />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>by {item.author}</Text>
          </View>
        </TouchableOpacity>
      )}
    />

  </SafeAreaView>
);

const EnglishScreen = ({navigation}) => (
    <SafeAreaView style={{flex:1,padding:10}}>
   <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>English Books </Text>

 <FlatList
      data= {EnglishBook}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { book: item })}>
          <View style={styles.bookItem}>
            <Image source={item.image} style={styles.bookImage} resizeMode="contain" />
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookAuthor}>by {item.author}</Text>
          </View>
        </TouchableOpacity>
      )}
    />

  </SafeAreaView>
);

const LogoutScreen = () => (
  <SafeAreaView style={styles.center}>
    <Text style={styles.screenText}>You have logged out</Text>
  </SafeAreaView>
);

// Custom Drawer with Icons
const CustomDrawerContent = (props) => (
  <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <DrawerItem
        label="Home"
        icon={() => <Icon name="home" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label="Marathi"
        icon={() => <Icon name="language" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Marathi')}
      />
      <DrawerItem
        label="Hindi"
        icon={() => <Icon name="language" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Hindi')}
      />
      <DrawerItem
        label="English"
        icon={() => <Icon name="language" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('English')}
      />
      <DrawerItem
        label="Logout"
        icon={() => <Icon name="logout" size={22} color="#4a4a4a" />}
        onPress={() => props.navigation.navigate('Logout')}
      />
    </View>
  </DrawerContentScrollView>
);

// Main Dashboard Home Screen
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safecontainer}>
      {/* Gradient Header */}
      <LinearGradient colors={['#4facfe', '#00f2fe']} style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>Dashboard</Text>
        <View style={{ width: 28 }} />
      </LinearGradient>

      {/* Main Content */}
      <View style={styles.center}>

       <Image s
          source={require('../Assets/English_img/home.jpg')}  // yahan apni image ka path do
          style={styles.simpleImage}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

// Drawer Navigator
const Drawer = createDrawerNavigator();

const Dashboard = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#333',
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Marathi" component={MarathiScreen} />
      <Drawer.Screen name="Hindi" component={HindiScreen} />
      <Drawer.Screen name="English" component={EnglishScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  screenText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },

  bookItem: {
  padding: 12,
  marginVertical: 6,
  marginHorizontal: 10,
  backgroundColor: '#f0f0f0',
  borderRadius: 8,
  width: '95%',
},
bookTitle: {
  fontSize: 16,
  fontWeight: '600',
  color: '#333',
},
bookAuthor: {
  fontSize: 14,
  color: '#666',
},
bookImage: {
  width: '100%',
  height: undefined,
  aspectRatio: 1,
  borderRadius: 8,
  marginBottom: 8,
},
 simpleImage: {
    width: 220,
    height: 320,
    borderRadius: 16,
  },

});
