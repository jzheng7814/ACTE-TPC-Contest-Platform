# ACTE Team Programming Challenge Contest Platform

NOTE: The code in this repository is an updated copy of what can be found at the OpenCPC association repository, of which I am a contributor alongside my associates.

The ACTE Team Programming Challenge is a contest that has existed for the majority of the ACTE organization's lifetime, but has been brought to the virtual hosting space under this contest platform since Spring 2021. The contest is formatted as such:

10 GREEN problems (Easiest Difficulty, Skill Set: Basic Language Knowledge, Language Library Knowledge, Array Manipulation)- 10 points each <br />
6 BLUE problems (Medium Difficulty, Skill Set: Binary Search, Sorting, Ad-Hoc, Intermediate Contest Programming Knowledge)- 40 points each\n <br />
4 RED problems (Hardest Difficulty, Skill Set: Dijkstra's Algorithm, Kruskal/Prim, Dynamic Programming, Advanced Contest Programming Knowledge) - 80 points each

Students work in groups of size 1-3 and are given 3 hours to solve all problems.

The problems to the previous year will be posted on the platform for practice. The solutions will be posted on this GitHub account.

The URL to the platform is https://actecomp.org. Note that the HTTPS is required- HTTP access is not permitted.

The full-stack contest platform itself consists of 3 parts:
Clean client-side frontend coded from HTML, CSS, JavaScript, and PHP. <br />
Backend hub server coded in Python managing a MySQL server which also distributes code submissions from the user client sides to submission processing servers. <br />
Submission processing servers coded in Python which take the code submissions, run them through a set of inputs, and score them on a set of correct outputs for those inputs. <br /<

The platform features a live-updating scoreboard, refreshing upon scoreboard load or new code submission. Testcase results are returned live as they are graded to the user. The platform also features scalability in the form of the ability to support any number of submission processing servers, meaning that even with increasing numbers of students, scalability can be maintained simply by increasing the hardware quality of the hub server as well as the quantity of submission processing servers. The turnaround time on submissions during contest time is rarely above 1 second, barring slow code that exceeds time limit on testcases.

The contest has expanded to other states in its lifetime, so far encompassing Alabama and Georgia with ongoing talks with South Carolina and Florida. The contest has seen as many as 120 kids across ~60 teams competing simultaneously to determine the best team.

Points of Contact:
Jerry Zheng- jerryzheng7814@gmail.com (Contest Platform Manager) <br />
Sharon Reynolds- actestate2@gmail.com (ACTE Director) <br />
Aaron Griffin- aaron.griffin@gastc.org (GASTC Director) <br />
