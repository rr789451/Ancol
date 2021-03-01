import React from "react"
import Layout from "../components/Layout"
import LibraryHero from "../components/library-hero"

const Library = () => {
  return (
    <Layout>
      <LibraryHero />
      <div className="library-info">
        <h1>Library</h1>
        The college library will provide reference books (about 2000 in number)
        for all the relevant subjects, Daily News Papers, Magazines and journals
        (Weekly/Monthly). A good collection of Reading Material/Resources is
        also available. The library will be functioning on all working days from
        8.30 am to 3.30 a.m.
        <br></br>
        <br></br>
        <h4>General Rules</h4>
        <ul>
          <li>
            Silence must be observed inside the library and loud talking is
            prohibited in the library. As the library is the place of individual
            study and research, members should conduct themselves to maintain a
            conducive atmosphere. Use of mobile phone inside the library is not
            permitted. Normally Photography/ Videography inside the library is
            prohibited.
          </li>
          <li>
            Books should be handled with care. Marking on books is most
            objectionable and may lead to cancellation of membership privileges.
          </li>
          <li>
            For better use of the Library, members can have help of the staff.
          </li>
          <li>
            Any infringement of the above will render to forfeiture of the
            privilege of admission to and borrowing books from the library.
          </li>
        </ul>
        <br></br>
        <h4>Library Rules (ANCOL)</h4>
        <ul>
          <li>
            <h5>Loss of books :</h5>
            <p>
              {" "}
              i. The books reported to have been lost shall be either replaced
              by the latest edition or three times of the price of the book with
              fine shall be levied within a period of one month.
            </p>
            <p>
              ii. In case the book is out of print or rare and the latest price
              is not available, the Librarian will decide the amount to be
              charged.
            </p>
          </li>
          <li>
            <h5>Over due :</h5>
            <p>
              An overdue charge of 1/- (Rupee One) per day will be levied if a
              book is kept beyond the permissible period. In case the period
              exceeds one month, a fine of Re.2/- shall be charged per day from
              the borrower.
            </p>
          </li>
          <li>
            <p>
              The librarian is empowered to recall any book at any time if
              necessity arises.
            </p>
          </li>
          <li>
            <p>
              Reference books, journals, magazines, rare books, books on Andaman
              & Nicobar Islands are not to be issued. These are to be referred
              in the Library only.
            </p>
          </li>
          <li>
            <h5>Page Cutting :</h5>
            <p>
              {" "}
              i. The books issued to the library users should be returned in
              good condition. The library (Librarian/supporting staff) use to
              check the pages of the books which are returned on daily basis to
              ascertain as to whether any pages are missing / cutting etc are
              there or not and only after this activity the books are placed on
              the shelves. If any pages are found missing the borrower who had
              got the book issued last will be fined three times of the price of
              the book plus fine or the borrowers has to replace the book of the
              same edition or new edition within the stipulated period.
            </p>
          </li>
        </ul>
        <br></br>
        <h4>Membership and Admission to the Library</h4>
        <p>
          Admission to the Library is restricted to members/card holders, but
          others who are desirous in consulting the resources of the Library may
          do so with the permission of the Principal / Librarian. Permissions
          can be refused without assigning any reasons.
        </p>
        <p>
          The following persons are entitled to draw book from the College
          library:
        </p>
        <p>i. Members of the teaching staff.</p>
        <p>ii. Non-teaching staff of the College</p>
        <p>iii. Bonafide students.</p>
        <br></br>
        <br></br>
        <h4>Issue System</h4>
        <p>
          • Borrower’s Card method is used for issue of books to the students
          and Borrowers. Pass books are used for issue of books to teaching and
          non teaching staff. Whenever a transaction is done (issue and return
          of books), the Identity Card should be produced to the staff available
          in the Circulation Counter. No books will be issued to the students
          without production of College Identity Cards.
        </p>
        <p>
          • Special care should be taken to see that the Membership Library
          Card/ Borrowers Pass Book is not misplaced or lost. In case of loss of
          Library card/ Borrowers Pass Book, it should be reported to the
          Librarian immediately in writing. On receipt of such letter, the
          membership will be deleted to avoid misuse of the lost Library Card/
          Borrowers Pass Book. The student who lost the Library Card and wish to
          apply for duplicate Library Card or Clearance Certificate should pay
          Rs. 20/-similarly if the staff member losses the Library Borrowers
          Pass book he/she has to pay Rs.20/- for a duplicate pass book.
        </p>
        <br></br>
        <br></br>
        <h4>No Dues Certificate</h4>
        <p>
          The Heads of Departments / Admission & Examination Wing of the College
          shall require the students of their departments/College to produce a
          clearance certificate from the College Library to the effect that they
          have returned all books and cleared all dues, before they appear the
          final semester University examinations or are issued transfer
          certificate, whichever is earlier.
        </p>
      </div>
    </Layout>
  )
}

export default Library
