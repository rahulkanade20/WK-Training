import org.junit.jupiter.api.*;



// @BeforeAll @BeforeEach @AfterALl @AfterEach
// @EnableOnOs @DisableOnOs
//Assumptions.assumeTrue()
// @RepeatedTest(value=5)
// @ValueSource annotation ... String, ints, doubles, floates etc
// @MethodSource("method name") annotation
// @CsvSource ... comma separated values
// @CsvFileSource annotation
// @Disabled annotation
// @Nested ...nested classes used to logically group tests together, can only have @BeforeEach
// ans @AfterEach , cannot use @BeforeAll and @AfterAll
public class ContactManagerTest {

    ContactManager contactManager;

    @BeforeAll
    public static void setUpAll() {
        System.out.println("Before all tests are executed");
    }

    @BeforeEach
    public void setUpEach() {

        contactManager = new ContactManager();

        System.out.println("Before each test is executed");
    }

    @AfterAll
    public static void afterAll() {
        System.out.println("After all tests are executed");
    }

    @AfterEach
    public void afterEach() {
        System.out.println("After each tests are executed");
    }

    @Test
    //@DisplayName("Should Create Contact")
    public void shouldCreateContact() {

        contactManager.addContact("abc", "def", "0973992849");
        Assertions.assertFalse(contactManager.getAllContacts().isEmpty());
        Assertions.assertEquals(1, contactManager.getAllContacts().size());
    }

    @Test
    @DisplayName("Should Not Create Contact When First Name is Null")
    public void shouldThrowRuntimeExceptionWhenFirstNameIsNull() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            contactManager.addContact(null, "Doe", "0123456789");
        });
    }

    @Test
    @DisplayName("Should Not Create Contact When Last Name is Null")
    public void shouldThrowRuntimeExceptionWhenLastNameIsNull() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            contactManager.addContact("John", null, "0123456789");
        });
    }

    @Test
    @DisplayName("Should Not Create Contact When Phone Number is Null")
    public void shouldThrowRuntimeExceptionWhenPhoneNumberIsNull() {
        Assertions.assertThrows(RuntimeException.class, () -> {
            contactManager.addContact("John", "Doe", null);
        });
    }
}
