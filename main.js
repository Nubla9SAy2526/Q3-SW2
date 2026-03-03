function viewdiscount(){
    let budget = Number(document.getElementById("budget").value);
    let discountvalue = Number(budget * .2);
    document.getElementById("discount").innerHTML = `
    <div class="container text-center">
        <h4>Suggestions & Discounts</h4>
        <button class="btn btn-primary" type="text" style="background-color: rgba(255, 255, 255, 0); border-color: rgb(230, 102, 119); color: rgb(230, 102, 119);">Lilies</button>
        <button class="btn btn-primary" type="text" style="background-color: rgba(255, 255, 255, 0); border-color: rgb(230, 102, 119); color: rgb(230, 102, 119);">Tulips</button>
        <button class="btn btn-primary" type="text" style="background-color: rgba(255, 255, 255, 0); border-color: rgb(230, 102, 119); color: rgb(230, 102, 119);">Peonies</button>
        <br>
        <br><h5>Eligible discount: <button class="btn btn-primary" type="text" style="background-color: rgb(250, 195, 45); border-color: rgb(214, 151, 63);">$discountvalue</button></h5>
    </div> `;
}

function seeLocation(){
    document.getElementById("location").innerHTML = `
    <div class="container text-center">
        <h4>Boutique Location</h4>
        <p><b>Location:</b> SM City North EDSA Annex 1 Tunnel, Bago Bantay, Quezon City, Metro Manila </p>
    </div> `;
}
    


