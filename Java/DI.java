// dependency principle in java

public class DI {

    BankCard bankCard;

    public DI(BankCard bankCard) {
        this.bankCard = bankCard;
    }

    public void doPurchaseSomething(long amount){
        bankCard.doTransaction(amount);
    }

    public static void main(String[] args) {
       // DebitCard debitCard=new DebitCard();
       // CreditCard creditCard=new CreditCard();

        // CreditCard bankCard=new CreditCard();
        // DI di=new DI(bankCard);
        // di.doPurchaseSomething(7000);

        BankCard bankCard=new DebitCard();
        DI di=new DI(bankCard);
        di.doPurchaseSomething(5000);
    }
    
}

interface BankCard {

    public void doTransaction(long amount);
}


class CreditCard implements BankCard {

    public void doTransaction(long amount){
        System.out.println("payment using Credit card");
    }
}

class DebitCard implements BankCard{

    public void doTransaction(long amount){
        System.out.println("payment using Debit card");
    }
}