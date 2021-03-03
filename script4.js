const questions = document.getElementById('questions');
console.log(questions);


var array = [['1) "Parity bits" are used for which of the following purposes?', 'a) Encryption of data','b) To transmit faster','c) To detect errors','d) To identify the user'],
['2) A collection of hyperlinked documents on the internet forms the ?', 'a) World Wide Web (WWW)','b) E-mail system','c) Mailing list','d) Hypertext markup language'],
['3) The location of a resource on the internet is given by its?', 'a) Protocol','b) URL','c) E-mail address','d) ICQ'],
['4) Which software prevents the external access to a system?', 'a) Firewall', 'b) Gateway','c) Router','d) Virus checker'],
['5)  Which of the following terms is just the collection of networks that can be joined together?', 'a) Intranet','b) Extranet','c)  Internet','d) LAN'],
['6) The application layer of the OSI model is', 'a) Four layer ', 'b) Five layer','c) Six layer','d) Seven layer'],
['7) Network congestion occurs _________', 'a) in case of traffic overloading','b) when a system terminates','c) when connection between two nodes terminates','d) in case of transfer failure'],
['8) Which transmission media provides the highest transmission speed in a network?', 'a) coaxial cable','b) twisted pair cable','c) optical fiber','d) electrical cable'],
['9) The physical layer translates logical communication requests from the ______ into hardware specific operations.', 'a) data link layer','b) network layer','c) trasnport layer','d) application layer'],
['10) The data link layer takes the packets from _________ and encapsulates them into frames for transmission.','a) network layer','b) physical layer','c) transport layer','d) application layer'],
['11) To form a WAN or MAN network, public networks can be used in between(True /False)'],
['12) How many layers are present in the Internet protocol stack (TCP/IP model)?', 'a) 5','b) 7','c) 6','d) 10'],
['13) Transmission data rate is decided by ____________', 'a) network layer','b) physical layer','c) data link layer','d) transport layer'],
['14) The sizes of source and destination port address in TCP header are ', 'a) 16-bits and 32-bits','b) 16-bits and 16-bits','c) 32-bits and 16-bits','d) 32-bits and 32-bits'],
['15) What allows TCP to detect lost segments and in turn recover from that loss?', 'a) Sequence number','b) Acknowledgment number','c) Checksum','d) Both Sequence & Acknowledgment number'],
['16) The ______ field is used to detect errors over the entire user datagram.', 'a) udp header', 'b) checksum', 'c) source port','d) destination port'],
['17) The default connection type used by HTTP is _________', 'a) Persistent','b) Non-persistent','c) Can be either persistent or non-persistent depending on connection request','d) None of the mentioned'],
['18) The domain name system is maintained by _______', 'a) distributed database system','b) a single server','c) a single computer','d) none of the mentioned'],
['19) DHCP is used for ________', 'a) IPv6','b) IPv4','c) Both IPv6 and IPv4','d) None of the mentioned'],
['20)  Which of the following is a form of DoS attack?', 'a) Vulnerability attack','b) Bandwidth flooding','c) Connection flooding','d) All of the mentioned'],
['21) Firewalls are often configured to block ___________','a) UDP traffic','b) TCP traffic','c) Sensitive traffic','d) Best-effort traffic'],
['22) The time required to examine the packet’s header and determine where to direct the packet is part of __________', 'a) Processing delay','b) Queuing delay','c) Transmission delay','d) Propagation delay'],
['23) In asymmetric key cryptography, the private key is kept by __________','a) sender','b) receiver','c) sender and receiver','d) all the connected devices to the network'],
['24) Which one of the following algorithm is not used in asymmetric-key cryptography?','a) rsa algorithm','b) diffie-hellman algorithm','c) electronic code book algorithm','d) dsa algorithm'],
['25) In _________ systems, resources are allocated on demand.', 'a) packet switching','b) circuit switching','c) line switching','d) frequency switching'],
['26) What is the full form of RAID ?','A. Redundant Array of Independent Disks','B. Redundant Array of Important Disks','C. Random Access of Independent Disks','D. Random Access of Important Disks'],
['27) What do you mean by broadcasting in Networking?','A. It means addressing a packet to all machine','B. It means addressing a packet to some machine','C. It means addressing a packet to a particular machine','D. It means addressing a packet to except a particular machine'],
['28) What is the use of Ping command?','A. To test a device on the network is reachable','B. To test a hard disk fault','C. To test a bug in a Application','D. To test a Pinter Quality'],
['29) Which of the following transport layer protocols is used to support electronic mail?','a) SMTP','b) IP','c) TCP','d) UDP'],
['30) The network providing a high speed connectivity is','a) MAN','b) LAN','c) c) WAN','d) Internetwork'],
['31) Which of the following protocols uses both TCP and UDP?','  a) FTP','b) SMTP','c) Telnet', 'd) DNS'],
['32) In CRC there is no error if the remainder at the receiver is _____.','a) Equal to the remainder at the sender','b) Zero','c) Nonzero','d) The quotient at the sender'],
['33) IP4 is more commonly used than IPv6?(True/False)'],
['34) What is the size of an IP address?','a) 64 bit','b) 128 bit','c) 16 bit','d) 32 bit'],
['35) UDP is an unreliable protocol.(True/False)'],
['36) Operating system','a) enables the programmer to draw a flow chart','b) provides a layer, user friendly interface','c) links a program with subroutine it references','d) all of these'],
['37) Which of the following is not an operating system?','a) UNIX','b) MS-DOS','c) CP/M','d) PASCAL'],
['38) FIFO scheduling is','a) Fair-share scheduling','b) Deadline scheduling','c) Non-preemptive scheduling','d) Preemptive scheduling'],
['39) What is the name of the operating system that reads and reacts in terms of actual time?','a) Real time system','b) Time sharing system','c) Quick response system','d) Batch system'],
['40) UNIX operating system','a) can run on PC’s and larger system','b) is multitasking','c) is multiuser','d) all of these'],
['41) Context switching is part of','a) Interrupt servicing','b) Interrupt handling','c) Polling','d) Spooling'],
['42) ____ is an example of single user Operating System.','A) Ms-Dos','B) Linux','C) Unix','D) Basic'],
['43) The Operating System should work in a network as well as ___ environment.','A) diverted','B) data','C) distributed','D) direct'],
['44) The allocation of processors by process management is also known as the CPU ___','A) Managing','B) Processing','C) Planning','D) Scheduling'],
['45) The multi-user Operating System is based on the concept of ____','A) Time-losing','B) Time-spooling','C) Time-gaining','D) Time-sharing'],
['46) ____ systems have more than one CPU in close communication with the others.','A) Communication','B) Multiprocessor','C) Controller','D) Processor'],
['47) The operating system provides special routines called ____ to support the specific behavior of individual device.','A) Managers','B) Programs','C) Application','D) Device drivers'],
['48) ____ is one program running at all times on the computer.','A) Application','B) Operation','C) Utility','D) Operating system'],
['49) The job scheduling led to the concept known as the ___','A) Multiprogramming','B) Job programming','C) Programming','D) Threading'],
['50) User __ is divided into many partitions to accommodate various jobs.','A) File','B) Data','C) Memory','D) Program'],
['51) The ___ comes under the System Software category.','A) Utility System','B) Working System','C) Operating System','D) None'],
['52) The Operating System should provide ___','A) Data property','B) Data','C) Data clarity','D) Data security'],
['53) To ‘boot’, the system the computer must have a(n)','A) Assembler','B) Compiler','C) Operating system','D) Loader'],
['54) Scheduling is','A) the same regardless of the purpose of the system','B) quite simple to implement, even on large mainframes','C) unrelated to performance considerations','D) allowing job to use the processor'],
['55) How many types of multiprocessing models are there?','A) 1','B) 2','C) 3','D) 4'],
['56) Most popular 16-bit operating system is','A) MS-DOS','B) TRS-DOS','C) UNIX','D) CP/M'],
['57) Remote computing services involve the use of time sharing and','A)  Real time processing','B) Batch processing','C) Interactive processing','D) Multiprocessing'],
['58) Which one is the example of hard real time system?','A) Robotics','B) Industrial control','C) Both (a) and (b)','D) None of these'],
['59) Round robin is a','A) Kind of magnetic drum','B) Memory allocation policy','C) Process scheduling policy','D) Process synchronization policy'],
['60) Cryptography technique is used in','A) File management','B) Protection','C) Job scheduling','D) Polling'],
['61) Trap is a/an','A) Operating system’s interrupt','B) Hardware interrupt','C) Synchronous interrupt','D) Asynchronous interrupt'],
['62) A process having multiple threads of control implies','A) Only one task at a time, but much faster','B) More than one task at a time','C) Only one thread per process to use','D) All of the above'],
['63) Which command is used to clear the screen and display the operating system prompt on the first line of the display?','A) Cd','B) Md','C) Cls','D) Rename'],
['64) Delete directories','A) skd, srbm','B) nd, ndir','C) rd, rmdir','D) all of these'],
['65) All the time a computer is switched ON, its operating system software has to stay in','A) DVDs','B) CDs','C) Main storage','D) Primary storage'],
['66) In UNIX, name the system call which create(s) the new process?','A) Fork','B) New','C) Create','D) Creation'],
['67) ____ loader is executed, when a system is first turned ON or restarted.','A) Compile and Go','B) Relating','C) Harmish','D) Bootstrap'],
['68) What is the standard set of functions through which application interacts with the Kernel?','A) Compilers','B) Utility programs','C) Kernel code','D) System libraries'],
['69) The ability of an operating system to run more than one application at a time is called','A) Multi user computing','B) Time sharing','C) Object oriented programming','D) Multi tasking'],
['70) RESTORE command is used to','A) Restore files which are deleted recently','B) Restore files from disks made using the BACKUP command','C) Restore files is used to','D) Restore files from recycle bin']]

function AddQuestion() {
  
  var question = '';

  for (let i = 0; i < array.length; i++){
    question+=`<div class="col-lg-1 col-sm-1 col-md-1 m-2">
    <button type="button" class="btn btn-primary questionNo" data-bs-toggle="modal" data-bs-target="#exampleModal" >${i+1}</button>
  </div>`
  }
  questions.innerHTML = question;
}

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {

  var button = event.relatedTarget;
  
  
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-question');

  modalTitle.textContent = 'Question ' + button.innerText;
  var index = parseInt(button.innerText);
  var textContent = "";
  
  for (let i = 0; i < array[index - 1].length; i++){
    textContent+=`<br>${array[index-1][i]}`
  }

  modalBodyInput.innerHTML = textContent;

  
})





var shuffler = document.getElementById('shuffle');

shuffler.addEventListener('click', () => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
})
AddQuestion();