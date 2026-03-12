async function goToCheckout() {

  if (plan === "institutional") {
    window.location.href = "/contact?vertical=automotive";
    return;
  }

  const priceIds = {
    "starter-monthly": "PRICE_STARTER_MONTHLY",
    "starter-annual": "PRICE_STARTER_YEARLY",
    "pro-monthly": "PRICE_PRO_MONTHLY",
    "pro-annual": "PRICE_PRO_YEARLY"
  };

  try {

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        priceId: priceIds[plan]
      })
    });

    const data = await response.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Stripe checkout failed");
    }

  } catch (err) {

    console.error(err);
    alert("Network error");

  }

}
