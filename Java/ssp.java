// single responsibility principle

public class ssp {
    
}

class Book {

    private String name;
    private String author;
    private String text;

    public boolean isWordInText(String word){
        return text.contains(word);
    }

}

class BookPrinter() {

    void printTextToConsole(String text) {

        System.out.println(text);
    }

    void printTextToOtherMedium() {


    }
}