<template>
    <div class="price">
        <PriceSubscribe></PriceSubscribe>
        <MembershipPackages></MembershipPackages>
        <ImportAndExportCount></ImportAndExportCount>
    </div>
</template>

<script>
import PriceSubscribe from "@/components/PricePageComponents/PriceSubscribe.vue";
import MembershipPackages from "@/components/PricePageComponents/MembershipPackages.vue";
import ImportAndExportCount from "@/components/PricePageComponents/importANDexportCount.vue";

export default {
    nane: "Price",
    components: { PriceSubscribe, MembershipPackages, ImportAndExportCount },
};
</script>

<style scoped></style>
